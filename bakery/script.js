// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for anchor links
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

// Services Tab Functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and panes
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Show corresponding tab pane
        const targetTab = button.getAttribute('data-tab');
        document.getElementById(targetTab).classList.add('active');
    });
});

// Form Validation and Submission
const contactForm = document.querySelector('.contact-form-element');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !subject || !message) {
            showNotification('Lütfen tüm zorunlu alanları doldurun.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Lütfen geçerli bir e-posta adresi girin.', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.', 'success');
        contactForm.reset();
    });
}

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        if (!email || !isValidEmail(email)) {
            showNotification('Lütfen geçerli bir e-posta adresi girin.', 'error');
            return;
        }
        
        showNotification('E-posta listesine başarıyla abone oldunuz!', 'success');
        this.reset();
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#8b4513'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

// Add to cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.price').textContent;
        
        showNotification(`${productName} sepete eklendi! Fiyat: ${productPrice}`, 'success');
        
        // Add animation to button
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
        
        // Update cart icon if exists
        const cartIcon = document.querySelector('.nav-icon[href="cart.html"]');
        if (cartIcon) {
            cartIcon.style.animation = 'pulse 0.5s ease-in-out';
            setTimeout(() => {
                cartIcon.style.animation = '';
            }, 500);
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.category-card, .feature-card, .service-card, .team-member, .value-card, .contact-card, .social-card, .product-card, .testimonial-card, .timeline-item, .process-step');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
    
    // Add staggered animation for hero elements
    const heroElements = document.querySelectorAll('.hero h1, .hero p, .hero-features, .hero-buttons');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100 + (index * 200));
    });

    // Add animation for page headers
    const pageHeaders = document.querySelectorAll('.page-header h1, .page-header p');
    pageHeaders.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 200 + (index * 200));
    });

    // Add animation for section headers
    const sectionHeaders = document.querySelectorAll('.section-header h2, .section-header p');
    sectionHeaders.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('h3');
            const target = parseInt(statNumber.textContent.replace(/\D/g, ''));
            animateCounter(statNumber, target);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        statsObserver.observe(item);
    });
});

// Search functionality
const searchIcon = document.querySelector('.nav-icon[href="#"]');
if (searchIcon) {
    searchIcon.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Create search overlay
        const searchOverlay = document.createElement('div');
        searchOverlay.className = 'search-overlay';
        searchOverlay.innerHTML = `
            <div class="search-modal">
                <div class="search-header">
                    <h3>Ürün Ara</h3>
                    <button class="search-close">&times;</button>
                </div>
                <div class="search-content">
                    <input type="text" placeholder="Aradığınız ürünü yazın..." class="search-input">
                    <button class="search-btn">Ara</button>
                </div>
                <div class="search-suggestions">
                    <h4>Popüler Aramalar:</h4>
                    <div class="suggestion-tags">
                        <span class="suggestion-tag">Çikolatalı Pasta</span>
                        <span class="suggestion-tag">Köy Ekmeği</span>
                        <span class="suggestion-tag">Kruvasan</span>
                        <span class="suggestion-tag">Kurabiye</span>
                    </div>
                </div>
            </div>
        `;
        
        // Add styles
        searchOverlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        const searchModal = searchOverlay.querySelector('.search-modal');
        searchModal.style.cssText = `
            background: white;
            padding: 2rem;
            border-radius: 20px;
            max-width: 500px;
            width: 90%;
            transform: scale(0.8);
            transition: transform 0.3s ease;
        `;
        
        // Add to page
        document.body.appendChild(searchOverlay);
        
        // Animate in
        setTimeout(() => {
            searchOverlay.style.opacity = '1';
            searchModal.style.transform = 'scale(1)';
        }, 100);
        
        // Focus on input
        const searchInput = searchOverlay.querySelector('.search-input');
        searchInput.focus();
        
        // Close functionality
        const closeBtn = searchOverlay.querySelector('.search-close');
        closeBtn.addEventListener('click', () => {
            searchOverlay.style.opacity = '0';
            searchModal.style.transform = 'scale(0.8)';
            setTimeout(() => {
                document.body.removeChild(searchOverlay);
            }, 300);
        });
        
        // Close on overlay click
        searchOverlay.addEventListener('click', (e) => {
            if (e.target === searchOverlay) {
                searchOverlay.style.opacity = '0';
                searchModal.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    document.body.removeChild(searchOverlay);
                }, 300);
            }
        });
        
        // Search functionality
        const searchBtn = searchOverlay.querySelector('.search-btn');
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if (query) {
                showNotification(`"${query}" için arama yapılıyor...`, 'info');
                // Here you would implement actual search functionality
                setTimeout(() => {
                    searchOverlay.style.opacity = '0';
                    searchModal.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        document.body.removeChild(searchOverlay);
                    }, 300);
                }, 1000);
            }
        });
        
        // Suggestion tags
        const suggestionTags = searchOverlay.querySelectorAll('.suggestion-tag');
        suggestionTags.forEach(tag => {
            tag.addEventListener('click', () => {
                searchInput.value = tag.textContent;
                searchInput.focus();
            });
        });
    });
}

// Add some CSS for search modal
const searchStyles = document.createElement('style');
searchStyles.textContent = `
    .search-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
    }
    
    .search-header h3 {
        color: #8b4513;
        margin: 0;
    }
    
    .search-close {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #6b7280;
    }
    
    .search-content {
        display: flex;
        gap: 1rem;
        margin-bottom: 1.5rem;
    }
    
    .search-input {
        flex: 1;
        padding: 12px 16px;
        border: 2px solid #e2e8f0;
        border-radius: 8px;
        font-size: 1rem;
    }
    
    .search-btn {
        padding: 12px 24px;
        background: #8b4513;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
    }
    
    .search-suggestions h4 {
        color: #8b4513;
        margin-bottom: 1rem;
    }
    
    .suggestion-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
    
    .suggestion-tag {
        background: #fef7ed;
        color: #8b4513;
        padding: 0.5rem 1rem;
        border-radius: 15px;
        cursor: pointer;
        font-size: 0.9rem;
        transition: background 0.3s ease;
    }
    
    .suggestion-tag:hover {
        background: #8b4513;
        color: white;
    }
`;
document.head.appendChild(searchStyles);

// Lazy loading for images (placeholder functionality)
function lazyLoadImages() {
    const imagePlaceholders = document.querySelectorAll('.hero-placeholder, .about-placeholder, .service-placeholder, .member-placeholder, .map-placeholder');
    
    imagePlaceholders.forEach(placeholder => {
        // Add loading animation
        placeholder.style.position = 'relative';
        placeholder.style.overflow = 'hidden';
        
        // Add shimmer effect
        const shimmer = document.createElement('div');
        shimmer.style.cssText = `
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            animation: shimmer 2s infinite;
        `;
        
        placeholder.appendChild(shimmer);
    });
}

// Add shimmer animation
const shimmerStyles = document.createElement('style');
shimmerStyles.textContent = `
    @keyframes shimmer {
        0% { left: -100%; }
        100% { left: 100%; }
    }
`;
document.head.appendChild(shimmerStyles);

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Back to top button
function createBackToTopButton() {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #8b4513;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 5px 15px rgba(139, 69, 19, 0.3);
    `;
    
    document.body.appendChild(backToTop);
    
    // Show/hide based on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top functionality
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    backToTop.addEventListener('mouseenter', () => {
        backToTop.style.transform = 'translateY(-3px)';
        backToTop.style.boxShadow = '0 8px 25px rgba(139, 69, 19, 0.4)';
    });
    
    backToTop.addEventListener('mouseleave', () => {
        backToTop.style.transform = 'translateY(0)';
        backToTop.style.boxShadow = '0 5px 15px rgba(139, 69, 19, 0.3)';
    });
}

// Initialize back to top button
document.addEventListener('DOMContentLoaded', createBackToTopButton);

// Add loading state to buttons
function addLoadingState() {
    const buttons = document.querySelectorAll('.btn, .add-to-cart-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.type === 'submit' || this.classList.contains('add-to-cart-btn')) {
                const originalText = this.textContent;
                this.textContent = 'Yükleniyor...';
                this.disabled = true;
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.disabled = false;
                }, 2000);
            }
        });
    });
}

// Initialize loading states
document.addEventListener('DOMContentLoaded', addLoadingState);

console.log('Acboztech Pastane - JavaScript yüklendi!'); 