// Smooth scrolling for navigation links
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

// Mobile Menu Toggle
const menuToggle = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}


// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
        this.reset();
    });
}

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe destination cards
document.querySelectorAll('.destination-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// CTA Button click
document.querySelector('.cta-button')?.addEventListener('click', function () {
    document.querySelector('#destinations').scrollIntoView({
        behavior: 'smooth'
    });
});

// Modal Functions
function openModal(landmarkId) {
    const modal = document.getElementById('landmarkModal');
    const landmarkContent = document.getElementById('modal-' + landmarkId);

    // Hide all landmark content
    document.querySelectorAll('.modal-landmark').forEach(el => {
        el.classList.remove('active');
        // Reset animations
        el.querySelectorAll('.animate-item').forEach(item => {
            item.classList.remove('visible');
        });
    });

    // Show selected landmark
    if (landmarkContent) {
        landmarkContent.classList.add('active');

        // Trigger animations with long delay for slow-motion effect
        const items = landmarkContent.querySelectorAll('.animate-item');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('visible');
            }, 300 + (index * 400)); // Very Slow Cascade (400ms gap)
        });
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    const modal = document.getElementById('landmarkModal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Close modal when clicking outside
document.getElementById('landmarkModal')?.addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal with ESC key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

console.log('🌿 Du Lịch Việt - Website loaded successfully!');
