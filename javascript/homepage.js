document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    let isMenuOpen = false;

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            navLinks.style.display = isMenuOpen ? 'flex' : 'none';
            mobileMenuBtn.innerHTML = isMenuOpen ? 
                '<i class="fas fa-times"></i>' : 
                '<i class="fas fa-bars"></i>';
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                if (isMenuOpen) {
                    isMenuOpen = false;
                    navLinks.style.display = 'none';
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        });
    });

    // Location search functionality
    const searchInput = document.querySelector('.search-box input');
    const searchBtn = document.querySelector('.search-btn');

    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const searchTerm = searchInput?.value.trim();
            if (searchTerm) {
                // Redirect to search results page with search term
                window.location.href = `locations.html?search=${encodeURIComponent(searchTerm)}`;
            }
        });
    }

    if (searchInput) {
        // Enable search on Enter key
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value.trim();
                if (searchTerm) {
                    window.location.href = `locations.html?search=${encodeURIComponent(searchTerm)}`;
                }
            }
        });
    }

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            // Simulate API call
            setTimeout(() => {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            }, 1000);
        });
    }

    // Pricing button handlers
    const bookButtons = document.querySelectorAll('.btn-book');
    bookButtons.forEach(button => {
        button.addEventListener('click', function() {
            const plan = this.closest('.pricing-card').querySelector('h3').textContent;
            window.location.href = `booking.html?plan=${encodeURIComponent(plan.toLowerCase())}`;
        });
    });

    // Location card button handlers
    const viewSpotButtons = document.querySelectorAll('.btn-view');
    viewSpotButtons.forEach(button => {
        button.addEventListener('click', function() {
            const location = this.closest('.location-card').querySelector('h3').textContent;
            window.location.href = `location-details.html?location=${encodeURIComponent(location.toLowerCase())}`;
        });
    });

    // Navbar scroll effect
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
            // Scrolling down
            navbar.classList.remove('scroll-up');
            navbar.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
            // Scrolling up
            navbar.classList.remove('scroll-down');
            navbar.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });

    // Handle window resize for mobile menu
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.style.display = 'flex';
            isMenuOpen = false;
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        } else if (!isMenuOpen) {
            navLinks.style.display = 'none';
        }
    });
});