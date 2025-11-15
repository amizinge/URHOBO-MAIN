from server.app import app as application

# Vercel looks for a module-level `app`. Expose `application` for clarity.
app = application
