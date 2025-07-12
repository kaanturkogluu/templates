// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

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

    // Car Inventory Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const carListings = document.querySelectorAll('.car-listing');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            // Filter car listings
            carListings.forEach(car => {
                if (filter === 'all' || car.getAttribute('data-category') === filter) {
                    car.style.display = 'block';
                    car.style.animation = 'fadeIn 0.5s ease-in';
                } else {
                    car.style.display = 'none';
                }
            });
        });
    });

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('i');
            
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

    // Contact Form Validation
    const contactForm = document.querySelector('.contact-form-element');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value.trim();
            const privacy = document.querySelector('input[name="privacy"]').checked;

            if (!name || !email || !subject || !message || !privacy) {
                alert('Lütfen tüm zorunlu alanları doldurun ve gizlilik sözleşmesini kabul edin.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Lütfen geçerli bir e-posta adresi girin.');
                return;
            }

            // Simulate form submission
            alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
            contactForm.reset();
        });
    }

    // Scroll to top functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(scrollToTopBtn);

    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Scroll to top when button is clicked
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add hover effect to scroll to top button
    scrollToTopBtn.addEventListener('mouseenter', function() {
        this.style.background = 'var(--secondary-color)';
        this.style.transform = 'scale(1.1)';
    });

    scrollToTopBtn.addEventListener('mouseleave', function() {
        this.style.background = 'var(--primary-color)';
        this.style.transform = 'scale(1)';
    });

    // Header background on scroll
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'var(--bg-white)';
            header.style.backdropFilter = 'none';
        }
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .car-item, .testimonial-card, .service-card, .car-listing');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Hero scroll indicator functionality
    const scrollIndicator = document.querySelector('.scroll-arrow');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const featuresSection = document.querySelector('.features');
            if (featuresSection) {
                featuresSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Inventory Page Functionality
    const inventoryPage = document.querySelector('.inventory-results');
    if (inventoryPage) {
        // Advanced Filtering
        const filterSelects = document.querySelectorAll('.filter-group select');
        const applyFiltersBtn = document.getElementById('apply-filters');
        const clearFiltersBtn = document.getElementById('clear-filters');
        const carListings = document.querySelectorAll('.car-listing');
        const carCountElement = document.getElementById('car-count');
        const sortSelect = document.getElementById('sort-select');

        // Apply filters function
        function applyFilters() {
            const filters = {
                brand: document.getElementById('brand-filter').value,
                category: document.getElementById('category-filter').value,
                price: document.getElementById('price-filter').value,
                fuel: document.getElementById('fuel-filter').value,
                transmission: document.getElementById('transmission-filter').value,
                condition: document.getElementById('condition-filter').value
            };

            let visibleCount = 0;

            carListings.forEach(car => {
                let shouldShow = true;

                // Check each filter
                if (filters.brand && car.dataset.brand !== filters.brand) shouldShow = false;
                if (filters.category && car.dataset.category !== filters.category) shouldShow = false;
                if (filters.fuel && car.dataset.fuel !== filters.fuel) shouldShow = false;
                if (filters.transmission && car.dataset.transmission !== filters.transmission) shouldShow = false;
                if (filters.condition && car.dataset.condition !== filters.condition) shouldShow = false;

                // Price filter
                if (filters.price) {
                    const carPrice = parseInt(car.dataset.price);
                    const [minPrice, maxPrice] = filters.price.split('-').map(p => 
                        p === '+' ? Infinity : parseInt(p.replace(/\D/g, ''))
                    );
                    
                    if (filters.price === '2000000+') {
                        if (carPrice < 2000000) shouldShow = false;
                    } else {
                        if (carPrice < minPrice || carPrice > maxPrice) shouldShow = false;
                    }
                }

                // Show/hide car
                if (shouldShow) {
                    car.style.display = 'block';
                    car.style.animation = 'fadeIn 0.5s ease-in';
                    visibleCount++;
                } else {
                    car.style.display = 'none';
                }
            });

            // Update car count
            if (carCountElement) {
                carCountElement.textContent = visibleCount;
            }
        }

        // Clear filters function
        function clearFilters() {
            filterSelects.forEach(select => {
                select.value = '';
            });
            
            carListings.forEach(car => {
                car.style.display = 'block';
                car.style.animation = 'fadeIn 0.5s ease-in';
            });

            if (carCountElement) {
                carCountElement.textContent = carListings.length;
            }
        }

        // Sort function
        function sortCars() {
            const sortBy = sortSelect.value;
            const grid = document.getElementById('inventory-grid');
            const cars = Array.from(carListings);

            cars.sort((a, b) => {
                switch (sortBy) {
                    case 'newest':
                        return parseInt(b.dataset.year) - parseInt(a.dataset.year);
                    case 'price-low':
                        return parseInt(a.dataset.price) - parseInt(b.dataset.price);
                    case 'price-high':
                        return parseInt(b.dataset.price) - parseInt(a.dataset.price);
                    case 'mileage-low':
                        return parseInt(a.dataset.mileage) - parseInt(b.dataset.mileage);
                    case 'mileage-high':
                        return parseInt(b.dataset.mileage) - parseInt(a.dataset.mileage);
                    default:
                        return 0;
                }
            });

            // Reorder DOM elements
            cars.forEach(car => {
                grid.appendChild(car);
            });
        }

        // Event listeners
        if (applyFiltersBtn) {
            applyFiltersBtn.addEventListener('click', applyFilters);
        }

        if (clearFiltersBtn) {
            clearFiltersBtn.addEventListener('click', clearFilters);
        }

        if (sortSelect) {
            sortSelect.addEventListener('change', sortCars);
        }

        // Favorite functionality
        const favoriteButtons = document.querySelectorAll('.car-favorite');
        favoriteButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const icon = this.querySelector('i');
                this.classList.toggle('active');
                
                if (this.classList.contains('active')) {
                    icon.classList.remove('far');
                    icon.classList.add('fas');
                } else {
                    icon.classList.remove('fas');
                    icon.classList.add('far');
                }
            });
        });

        // Load more functionality
        const loadMoreBtn = document.getElementById('load-more');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', function() {
                // Simulate loading more cars
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Yükleniyor...';
                this.disabled = true;

                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-plus"></i> Daha Fazla Araç Yükle';
                    this.disabled = false;
                    alert('Daha fazla araç yüklendi!');
                }, 2000);
            });
        }

        // Quick contact form
        const searchForm = document.querySelector('.search-form');
        if (searchForm) {
            searchForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Araç arama talebiniz alındı! En kısa sürede size dönüş yapacağız.');
                this.reset();
            });
        }
    }

    // Add CSS for fadeIn animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
});

// Utility function to format phone numbers
function formatPhoneNumber(phoneNumber) {
    const cleaned = phoneNumber.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return phoneNumber;
}

// Utility function to format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY'
    }).format(amount);
} 