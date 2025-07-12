// Mobile Navigation Toggle
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

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('i');
        
        // Toggle answer visibility
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            icon.style.transform = 'rotate(0deg)';
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            icon.style.transform = 'rotate(180deg)';
        }
    });
});

// Contact Form Validation and Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !subject || !message) {
            alert('Lütfen tüm zorunlu alanları doldurun.');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Lütfen geçerli bir e-posta adresi girin.');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Gönderiliyor...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Newsletter subscription
const ctaForm = document.querySelector('.cta-form');
if (ctaForm) {
    ctaForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value.trim();
        
        if (!email || !isValidEmail(email)) {
            alert('Lütfen geçerli bir e-posta adresi girin.');
            return;
        }
        
        const submitBtn = this.querySelector('button');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Abone Olunuyor...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Bültenimize başarıyla abone oldunuz!');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// Scroll to top functionality
window.addEventListener('scroll', () => {
    const scrollTop = document.createElement('button');
    scrollTop.innerHTML = '↑';
    scrollTop.className = 'scroll-top';
    scrollTop.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s;
        z-index: 1000;
    `;
    
    if (window.pageYOffset > 300) {
        if (!document.querySelector('.scroll-top')) {
            document.body.appendChild(scrollTop);
        }
        scrollTop.style.opacity = '1';
    } else {
        const existingBtn = document.querySelector('.scroll-top');
        if (existingBtn) {
            existingBtn.remove();
        }
    }
});

// Add click event to scroll to top button
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('scroll-top')) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .category-card, .testimonial-card, .service-card, .product-card, .team-member, .mv-card');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Toy animation on hero section
const toyItems = document.querySelectorAll('.toy-item');
toyItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Price formatting
function formatPrice(price) {
    return new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY'
    }).format(price);
}

// Age category filtering (for future use)
function filterByAge(ageGroup) {
    // This function can be expanded to filter products by age group
    console.log(`Filtering by age group: ${ageGroup}`);
}

// Search functionality (for future use)
function searchProducts(query) {
    // This function can be expanded to search through products
    console.log(`Searching for: ${query}`);
}

// Add to cart functionality (for future use)
function addToCart(productId) {
    // This function can be expanded to add products to cart
    console.log(`Adding product ${productId} to cart`);
}

// Initialize tooltips (if needed)
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = e.target.dataset.tooltip;
            tooltip.style.cssText = `
                position: absolute;
                background: var(--dark-gray);
                color: white;
                padding: 5px 10px;
                border-radius: 4px;
                font-size: 12px;
                z-index: 1000;
                pointer-events: none;
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = e.target.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + 'px';
        });
        
        element.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

// Initialize tooltips when DOM is loaded
document.addEventListener('DOMContentLoaded', initTooltips);

// Products Page Functionality
function initProductsPage() {
    const ageFilter = document.getElementById('age-filter');
    const brandFilter = document.getElementById('brand-filter');
    const priceFilter = document.getElementById('price-filter');
    const sortFilter = document.getElementById('sort-filter');
    const productItems = document.querySelectorAll('.product-item');

    // Filter products
    function filterProducts() {
        const selectedAge = ageFilter.value;
        const selectedBrand = brandFilter.value;
        const selectedPrice = priceFilter.value;

        productItems.forEach(item => {
            const age = item.dataset.age;
            const brand = item.dataset.brand;
            const price = parseInt(item.dataset.price);

            let showItem = true;

            // Age filter
            if (selectedAge && age !== selectedAge) {
                showItem = false;
            }

            // Brand filter
            if (selectedBrand && brand !== selectedBrand) {
                showItem = false;
            }

            // Price filter
            if (selectedPrice) {
                const [min, max] = selectedPrice.split('-').map(p => p === '+' ? Infinity : parseInt(p));
                if (price < min || (max !== Infinity && price > max)) {
                    showItem = false;
                }
            }

            item.style.display = showItem ? 'block' : 'none';
        });
    }

    // Sort products
    function sortProducts() {
        const sortBy = sortFilter.value;
        const productsContainer = document.querySelector('.products-grid');
        const products = Array.from(productItems);

        products.sort((a, b) => {
            const priceA = parseInt(a.dataset.price);
            const priceB = parseInt(b.dataset.price);

            switch (sortBy) {
                case 'price-low':
                    return priceA - priceB;
                case 'price-high':
                    return priceB - priceA;
                case 'popular':
                    // Sort by badge (assuming products with badges are more popular)
                    const badgeA = a.querySelector('.product-badge');
                    const badgeB = b.querySelector('.product-badge');
                    return (badgeB ? 1 : 0) - (badgeA ? 1 : 0);
                case 'new':
                    // Sort by "Yeni" badge
                    const newBadgeA = a.querySelector('.product-badge')?.textContent === 'Yeni';
                    const newBadgeB = b.querySelector('.product-badge')?.textContent === 'Yeni';
                    return (newBadgeB ? 1 : 0) - (newBadgeA ? 1 : 0);
                default:
                    return 0;
            }
        });

        // Reorder DOM elements
        products.forEach(product => {
            productsContainer.appendChild(product);
        });
    }

    // Add event listeners
    if (ageFilter) ageFilter.addEventListener('change', filterProducts);
    if (brandFilter) brandFilter.addEventListener('change', filterProducts);
    if (priceFilter) priceFilter.addEventListener('change', filterProducts);
    if (sortFilter) sortFilter.addEventListener('change', sortProducts);

    // Add to cart functionality
    document.querySelectorAll('.product-actions .btn-primary').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const productName = this.closest('.product-item').querySelector('h3').textContent;
            
            // Show success message
            const originalText = this.textContent;
            this.textContent = 'Sepete Eklendi!';
            this.style.background = 'var(--success-color)';
            this.style.color = 'var(--dark-gray)';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '';
                this.style.color = '';
            }, 2000);
            
            console.log(`${productName} sepete eklendi`);
        });
    });

    // Product detail functionality
    document.querySelectorAll('.product-actions .btn-secondary').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const productName = this.closest('.product-item').querySelector('h3').textContent;
            alert(`${productName} ürün detayı yakında eklenecek!`);
        });
    });

    // Pagination functionality
    document.querySelectorAll('.pagination-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all buttons
            document.querySelectorAll('.pagination-btn').forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Simulate page change
            console.log('Sayfa değiştirildi');
        });
    });

    // Newsletter subscription
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            const submitBtn = this.querySelector('button');
            
            if (!isValidEmail(email)) {
                alert('Lütfen geçerli bir e-posta adresi girin.');
                return;
            }
            
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Abone Olunuyor...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Bültenimize başarıyla abone oldunuz!');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
}

// Initialize products page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.products-grid')) {
        initProductsPage();
    }
}); 