// ULN Website Main JavaScript
// Lumina Network Platform with Interactive Components

const API_BASE_URL = window.ULN_API_BASE || 'http://127.0.0.1:5000';

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeScrollEffects();
    initializeInteractiveComponents();
    initializeCarousels();
    initializeFamilyTree();
    initializeCulturalExplorer();
    initializeProfessionalDirectory();
    initializeAuthPortal();
});

// Animation Initialization
function initializeAnimations() {
    // Typewriter effect for hero text
    if (document.querySelector('.hero-typewriter')) {
        new Typed('.hero-typewriter', {
            strings: [
                'Illuminating Urhobo Lineages',
                'Designing Diaspora Futures',
                'Activating Culture Technology',
                'Celebrating Collective Brilliance'
            ],
            typeSpeed: 60,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }

    // Splitting.js for text animations
    if (typeof Splitting !== 'undefined') {
        Splitting({
            target: '.split-text',
            by: 'chars'
        });
    }

    // Animate on scroll elements
    anime({
        targets: '.fade-in-up',
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 800,
        delay: anime.stagger(100),
        easing: 'easeOutQuart'
    });
}

// Scroll Effects
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
}

// Interactive Components
function initializeInteractiveComponents() {
    // Feature cards hover effects
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.05,
                rotateY: 5,
                duration: 300,
                easing: 'easeOutQuart'
            });
        });

        card.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                rotateY: 0,
                duration: 300,
                easing: 'easeOutQuart'
            });
        });
    });

    // Navigation smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Carousel Initialization
function initializeCarousels() {
    // Cultural heritage carousel
    if (document.querySelector('.heritage-carousel')) {
        new Splide('.heritage-carousel', {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '2rem',
            autoplay: true,
            interval: 4000,
            pauseOnHover: true,
            breakpoints: {
                768: {
                    perPage: 1
                },
                1024: {
                    perPage: 2
                }
            }
        }).mount();
    }

    // Testimonials carousel
    if (document.querySelector('.testimonials-carousel')) {
        new Splide('.testimonials-carousel', {
            type: 'loop',
            perPage: 1,
            autoplay: true,
            interval: 5000,
            pauseOnHover: true
        }).mount();
    }
}

// Family Tree Builder
function initializeFamilyTree() {
    const treeContainer = document.getElementById('family-tree');
    if (!treeContainer) return;

    // Sample family tree data
    const familyData = {
        name: "Root Ancestor",
        children: [
            {
                name: "First Generation",
                children: [
                    { name: "Grandchild 1", children: [] },
                    { name: "Grandchild 2", children: [] }
                ]
            },
            {
                name: "Second Generation",
                children: [
                    { name: "Grandchild 3", children: [] },
                    { name: "Grandchild 4", children: [] }
                ]
            }
        ]
    };

    // Create tree visualization using ECharts
    const treeChart = echarts.init(treeContainer);
    const treeOption = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'tree',
                data: [familyData],
                top: '10%',
                left: '10%',
                bottom: '10%',
                right: '10%',
                symbolSize: 12,
                label: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 12,
                    color: '#050B1A'
                },
                leaves: {
                    label: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                },
                emphasis: {
                    focus: 'descendant'
                },
                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750,
                itemStyle: {
                    color: '#7C3AED',
                    borderColor: '#0EA5E9',
                    borderWidth: 2
                },
                lineStyle: {
                    color: '#0F766E',
                    width: 2
                }
            }
        ]
    };
    treeChart.setOption(treeOption);

    // Handle tree interactions
    treeChart.on('click', function(params) {
        if (params.data) {
            showFamilyMemberDetails(params.data);
        }
    });

    // Add family member functionality
    const addMemberBtn = document.getElementById('add-member-btn');
    if (addMemberBtn) {
        addMemberBtn.addEventListener('click', function() {
            showAddMemberModal();
        });
    }
}

// Cultural Heritage Explorer
function initializeCulturalExplorer() {
    // Interactive map
    const mapContainer = document.getElementById('cultural-map');
    if (mapContainer) {
        initializeCulturalMap();
    }

    // Timeline slider
    const timeline = document.getElementById('heritage-timeline');
    if (timeline) {
        initializeTimeline();
    }

    // Cultural content filtering
    const filterButtons = document.querySelectorAll('.heritage-filter');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            filterCulturalContent(filter);
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function initializeCulturalMap() {
    // Sample kingdom data
    const kingdoms = [
        { name: 'Okpe', lat: 5.5, lng: 6.0, description: 'Historic Okpe Kingdom' },
        { name: 'Sapele', lat: 5.9, lng: 5.7, description: 'Commercial center' },
        { name: 'Abraka', lat: 5.8, lng: 6.1, description: 'Educational hub' },
        { name: 'Ughelli', lat: 5.5, lng: 6.0, description: 'Traditional capital' }
    ];

    // Create simple interactive map visualization
    const mapContainer = document.getElementById('cultural-map');
    const mapChart = echarts.init(mapContainer);
    
    const mapOption = {
        title: {
            text: 'Urhobo Kingdom Atlas',
            left: 'center',
            textStyle: {
                color: '#050B1A',
                fontSize: 18,
                fontWeight: 'bold'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return `<strong>${params.data.name}</strong><br/>${params.data.description}`;
            }
        },
        series: [
            {
                type: 'scatter',
                coordinateSystem: 'geo',
                data: kingdoms.map(k => ({
                    name: k.name,
                    value: [k.lng, k.lat],
                    description: k.description
                })),
                symbolSize: 20,
                itemStyle: {
                    color: '#7C3AED',
                    borderColor: '#0EA5E9',
                    borderWidth: 2
                },
                emphasis: {
                    itemStyle: {
                        color: '#FCD34D'
                    }
                }
            }
        ],
        geo: {
            map: 'world',
            roam: true,
            zoom: 10,
            center: [6, 5.7],
            itemStyle: {
                areaColor: '#F6F4FF',
                borderColor: '#0F766E'
            },
            emphasis: {
                itemStyle: {
                    areaColor: '#0EA5E9'
                }
            }
        }
    };
    
    mapChart.setOption(mapOption);
}

function initializeTimeline() {
    const timelineData = [
        { year: '1900', event: 'Early Documentation', description: 'First written records of Urhobo culture' },
        { year: '1950', event: 'Cultural Revival', description: 'Post-colonial cultural renaissance' },
        { year: '1980', event: 'Educational Growth', description: 'Expansion of educational institutions' },
        { year: '2000', event: 'Digital Age', description: 'Technology adoption and globalization' },
        { year: '2024', event: 'ULN Launch', description: 'Lumina platform debuts with global storytellers' }
    ];

    const timelineContainer = document.getElementById('heritage-timeline');
    if (timelineContainer) {
        timelineContainer.innerHTML = timelineData.map(item => `
            <div class="timeline-item" data-year="${item.year}">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <h4 class="timeline-year">${item.year}</h4>
                    <h5 class="timeline-title">${item.event}</h5>
                    <p class="timeline-description">${item.description}</p>
                </div>
            </div>
        `).join('');

        // Add click interactions
        document.querySelectorAll('.timeline-item').forEach(item => {
            item.addEventListener('click', function() {
                const year = this.dataset.year;
                showTimelineDetails(year);
            });
        });
    }
}

// Professional Directory
function initializeProfessionalDirectory() {
    // Sample professional data
    const professionals = [
        {
            name: 'Dr. Grace Oteri',
            profession: 'Medical Doctor',
            location: 'Lagos',
            kingdom: 'Okpe',
            achievements: ['Medical Excellence Award 2023', 'Community Health Initiative'],
            image: 'resources/professional-1.jpg'
        },
        {
            name: 'Chief Emeka Okotie',
            profession: 'Engineer',
            location: 'Abuja',
            kingdom: 'Sapele',
            achievements: ['Infrastructure Development', 'Youth Mentorship Program'],
            image: 'resources/professional-2.jpg'
        },
        {
            name: 'Prof. Ese Ovie',
            profession: 'Academic',
            location: 'Abraka',
            kingdom: 'Abraka',
            achievements: ['Research Publications', 'Cultural Documentation'],
            image: 'resources/professional-1.jpg'
        }
    ];

    // Render professional directory
    const directoryContainer = document.getElementById('professional-directory');
    if (directoryContainer) {
        renderProfessionalDirectory(professionals);
    }

    // Search functionality
    const searchInput = document.getElementById('professional-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const filteredProfessionals = professionals.filter(prof => 
                prof.name.toLowerCase().includes(searchTerm) ||
                prof.profession.toLowerCase().includes(searchTerm) ||
                prof.location.toLowerCase().includes(searchTerm)
            );
            renderProfessionalDirectory(filteredProfessionals);
        });
    }

    // Filter functionality
    const filterButtons = document.querySelectorAll('.professional-filter');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            const filteredProfessionals = filter === 'all' ? 
                professionals : 
                professionals.filter(prof => prof.profession.toLowerCase().includes(filter));
            
            renderProfessionalDirectory(filteredProfessionals);
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function renderProfessionalDirectory(professionals) {
    const container = document.getElementById('professional-directory');
    if (!container) return;

    container.innerHTML = professionals.map(prof => `
        <div class="professional-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div class="h-48 bg-gradient-to-br from-pulse to-aura"></div>
            <div class="p-6">
                <div class="flex items-center mb-4">
                    <div class="w-16 h-16 bg-pulse rounded-full flex items-center justify-center text-white font-bold text-xl">
                        ${prof.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div class="ml-4">
                        <h3 class="text-xl font-bold text-ink">${prof.name}</h3>
                        <p class="text-aura font-medium">${prof.profession}</p>
                    </div>
                </div>
                <div class="space-y-2 mb-4">
                    <p class="text-gray-600"><span class="font-medium">Location:</span> ${prof.location}</p>
                    <p class="text-gray-600"><span class="font-medium">Kingdom:</span> ${prof.kingdom}</p>
                </div>
                <div class="mb-4">
                    <h4 class="font-medium text-ink mb-2">Achievements:</h4>
                    <ul class="text-sm text-gray-600 space-y-1">
                        ${prof.achievements.map(achievement => `<li>• ${achievement}</li>`).join('')}
                    </ul>
                </div>
                <button class="w-full bg-pulse text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-200">
                    Connect
                </button>
            </div>
        </div>
    `).join('');
}

// Utility Functions
function showFamilyMemberDetails(member) {
    // Show modal with family member details
    alert(`Family Member: ${member.name}\nClick to edit or view detailed information.`);
}

function showAddMemberModal() {
    // Show modal to add new family member
    const name = prompt('Enter family member name:');
    if (name) {
        alert(`${name} will be added to your family tree.`);
    }
}

function showTimelineDetails(year) {
    // Show detailed information for timeline year
    alert(`Timeline Details for ${year}\nMore detailed historical information would be displayed here.`);
}

function filterCulturalContent(filter) {
    const contentItems = document.querySelectorAll('.heritage-content-item');
    contentItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
            item.style.display = 'block';
            anime({
                targets: item,
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 400,
                easing: 'easeOutQuart'
            });
        } else {
            anime({
                targets: item,
                opacity: [1, 0],
                translateY: [0, -20],
                duration: 400,
                easing: 'easeOutQuart',
                complete: function() {
                    item.style.display = 'none';
                }
            });
        }
    });
}

// Statistics Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current).toLocaleString();
        }, 16);
    });
}

// Initialize counters when they come into view
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            counterObserver.unobserve(entry.target);
        }
    });
});

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    counterObserver.observe(statsSection);
}

// Authentication Modal + API Integration
function initializeAuthPortal() {
    if (window.__ULNAuthInitialized) return;
    const authRoot = document.getElementById('auth-root');
    if (!authRoot) return;

    fetch('auth-modal.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Unable to load authentication modal.');
            }
            return response.text();
        })
        .then(html => {
            authRoot.innerHTML = html;
            registerAuthHandlers();
            window.__ULNAuthInitialized = true;
        })
        .catch(error => {
            console.error('Auth modal failed to load', error);
        });
}

function registerAuthHandlers() {
    const modal = document.getElementById('auth-modal');
    if (!modal) return;

    const loginForm = modal.querySelector('#login-form');
    const signupForm = modal.querySelector('#signup-form');
    const feedbackEl = modal.querySelector('#auth-feedback');
    const tabButtons = modal.querySelectorAll('[data-auth-tab]');
    const closeButtons = modal.querySelectorAll('[data-auth-close]');

    const updateFeedback = (message = '', type = 'info') => {
        const baseClass = 'mt-6 text-center text-sm font-semibold';
        const colorClass = type === 'error' ? 'text-red-500' : 'text-grove';
        feedbackEl.className = `${baseClass} ${colorClass}`;
        feedbackEl.textContent = message;
    };

    const setActiveTab = (mode) => {
        if (mode === 'signup') {
            signupForm.classList.remove('hidden');
            loginForm.classList.add('hidden');
        } else {
            loginForm.classList.remove('hidden');
            signupForm.classList.add('hidden');
        }

        tabButtons.forEach(button => {
            if (button.dataset.authTab === mode) {
                button.classList.add('bg-white', 'text-ink', 'shadow');
                button.classList.remove('text-gray-500');
            } else {
                button.classList.remove('bg-white', 'text-ink', 'shadow');
                button.classList.add('text-gray-500');
            }
        });

        updateFeedback('');
    };

    const showModal = (mode = 'login') => {
        setActiveTab(mode);
        modal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
    };

    const hideModal = () => {
        modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    };

    document.querySelectorAll('.open-auth-modal').forEach(trigger => {
        trigger.addEventListener('click', (event) => {
            event.preventDefault();
            const mode = trigger.dataset.authMode || 'login';
            showModal(mode);
        });
    });

    tabButtons.forEach(button => button.addEventListener('click', () => setActiveTab(button.dataset.authTab)));
    closeButtons.forEach(button => button.addEventListener('click', hideModal));
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            hideModal();
        }
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
            hideModal();
        }
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(loginForm);
        handleAuthRequest('login', formData, updateFeedback, hideModal);
    });

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(signupForm);
        handleAuthRequest('signup', formData, updateFeedback, hideModal);
    });

    setActiveTab('login');
}

async function handleAuthRequest(mode, formData, setFeedback, closeModal) {
    const endpoint = mode === 'signup' ? '/api/signup' : '/api/login';
    const payload = {};
    formData.forEach((value, key) => {
        payload[key] = typeof value === 'string' ? value.trim() : value;
    });

    try {
        setFeedback('Processing request...', 'info');
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        if (!response.ok || data.status !== 'success') {
            throw new Error(data.message || 'Unable to complete request.');
        }

        if (data.token) {
            localStorage.setItem('uln_token', data.token);
        }
        if (data.user) {
            localStorage.setItem('uln_user', JSON.stringify(data.user));
        }

        setFeedback(data.message || 'Success! Redirecting...', 'success');
        setTimeout(() => {
            closeModal();
        }, 1500);
    } catch (error) {
        setFeedback(error.message || 'Authentication failed. Please try again.', 'error');
    }
}
