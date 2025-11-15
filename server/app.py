import os
import sqlite3
from datetime import datetime
from flask import Flask, jsonify, request
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, 'data')
DB_PATH = os.path.join(DATA_DIR, 'lumina.db')

os.makedirs(DATA_DIR, exist_ok=True)

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})


def get_db_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        """
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password_hash TEXT NOT NULL,
            created_at TEXT NOT NULL
        );
        """
    )
    conn.commit()
    conn.close()


@app.before_first_request
def setup():
    init_db()


@app.get('/api/health')
def health_check():
    return jsonify({"status": "ok", "message": "Lumina API online"})


@app.post('/api/signup')
def signup():
    payload = request.get_json(force=True)
    name = (payload.get('name') or '').strip()
    email = (payload.get('email') or '').strip().lower()
    password = payload.get('password') or ''

    if not name or not email or not password:
        return jsonify({"status": "error", "message": "All fields are required."}), 400

    if len(password) < 6:
        return jsonify({"status": "error", "message": "Password must be at least 6 characters."}), 400

    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT id FROM users WHERE email = ?", (email,))
    if cursor.fetchone():
        conn.close()
        return jsonify({"status": "error", "message": "An account with this email already exists."}), 409

    password_hash = generate_password_hash(password)
    cursor.execute(
        "INSERT INTO users (name, email, password_hash, created_at) VALUES (?, ?, ?, ?)",
        (name, email, password_hash, datetime.utcnow().isoformat())
    )
    conn.commit()
    user_id = cursor.lastrowid
    conn.close()

    return jsonify({
        "status": "success",
        "message": "Signup complete. Welcome to the Lumina Network!",
        "user": {"id": user_id, "name": name, "email": email}
    }), 201


@app.post('/api/login')
def login():
    payload = request.get_json(force=True)
    email = (payload.get('email') or '').strip().lower()
    password = payload.get('password') or ''

    if not email or not password:
        return jsonify({"status": "error", "message": "Email and password are required."}), 400

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE email = ?", (email,))
    user = cursor.fetchone()
    conn.close()

    if not user or not check_password_hash(user['password_hash'], password):
        return jsonify({"status": "error", "message": "Invalid email or password."}), 401

    session_token = os.urandom(24).hex()

    return jsonify({
        "status": "success",
        "message": "Login successful.",
        "token": session_token,
        "user": {
            "id": user['id'],
            "name": user['name'],
            "email": user['email'],
            "created_at": user['created_at']
        }
    })


if __name__ == '__main__':
    init_db()
    app.run(debug=True)
