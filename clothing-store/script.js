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

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = '#ffffff';
        header.style.backdropFilter = 'none';
    }
});

// Add loading animation to cards
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

// Observe all cards for animation
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.category-card, .feature-card, .service-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Form validation for contact form
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            alert('Lütfen tüm alanları doldurun.');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Lütfen geçerli bir e-posta adresi girin.');
            return;
        }
        
        // Simulate form submission
        alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
        contactForm.reset();
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Search functionality (placeholder)
const searchIcon = document.querySelector('.nav-icon[href="#"]');
if (searchIcon) {
    searchIcon.addEventListener('click', (e) => {
        e.preventDefault();
        const searchTerm = prompt('Arama yapmak istediğiniz ürünü yazın:');
        if (searchTerm) {
            alert(`"${searchTerm}" için arama sonuçları gösterilecek.`);
        }
    });
}

// Shopping cart functionality (placeholder)
const cartIcon = document.querySelector('.nav-icon[href="#"]:nth-child(2)');
if (cartIcon) {
    cartIcon.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Alışveriş sepeti açılacak.');
    });
}

// User account functionality (placeholder)
const userIcon = document.querySelector('.nav-icon[href="#"]:nth-child(3)');
if (userIcon) {
    userIcon.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Kullanıcı hesabı açılacak.');
    });
}

// Add to cart animation
function addToCartAnimation() {
    const cartIcon = document.querySelector('.nav-icon[href="#"]:nth-child(2)');
    if (cartIcon) {
        cartIcon.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartIcon.style.transform = 'scale(1)';
        }, 200);
    }
}

// Category card click handlers
document.querySelectorAll('.category-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = link.parentElement.querySelector('h3').textContent;
        alert(`${category} kategorisi açılacak.`);
    });
});

// Service card click handlers
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
        const service = card.querySelector('h3').textContent;
        alert(`${service} hizmeti hakkında detaylı bilgi gösterilecek.`);
    });
});

// Newsletter subscription (if exists)
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        if (email && isValidEmail(email)) {
            alert('Bülten aboneliğiniz başarıyla tamamlandı!');
            newsletterForm.reset();
        } else {
            alert('Lütfen geçerli bir e-posta adresi girin.');
        }
    });
}

// Lazy loading for images (if any)
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// Back to top button functionality
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopButton.className = 'back-to-top';
backToTopButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: #f59e0b;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
`;

document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Product quick view functionality (placeholder)
function showQuickView(productId) {
    alert(`Ürün ID: ${productId} için hızlı görünüm açılacak.`);
}

// Size guide functionality (placeholder)
function showSizeGuide() {
    alert('Beden rehberi açılacak.');
}

// Wishlist functionality (placeholder)
function addToWishlist(productId) {
    alert(`Ürün ID: ${productId} istek listesine eklendi.`);
}

// Product filter functionality (placeholder)
function filterProducts(category) {
    alert(`${category} kategorisindeki ürünler filtrelenecek.`);
}

// Price range filter (placeholder)
function filterByPrice(min, max) {
    alert(`${min} TL - ${max} TL arasındaki ürünler gösterilecek.`);
}

// Color filter (placeholder)
function filterByColor(color) {
    alert(`${color} rengindeki ürünler gösterilecek.`);
}

// Sort products (placeholder)
function sortProducts(criteria) {
    alert(`Ürünler ${criteria} kriterine göre sıralanacak.`);
}

// Product review functionality (placeholder)
function submitReview(productId, rating, comment) {
    alert(`Ürün ID: ${productId} için ${rating} yıldızlı değerlendirme gönderildi.`);
}

// Store locator functionality (placeholder)
function findNearbyStores() {
    alert('Yakındaki mağazalar gösterilecek.');
}

// Appointment booking (placeholder)
function bookAppointment(service, date, time) {
    alert(`${service} için ${date} tarihinde ${time} saatinde randevu alındı.`);
}

// Gift card functionality (placeholder)
function purchaseGiftCard(amount, recipient) {
    alert(`${amount} TL değerinde hediye kartı ${recipient} için satın alındı.`);
}

// Loyalty program (placeholder)
function checkLoyaltyPoints() {
    alert('Sadakat puanlarınız kontrol ediliyor...');
}

// Social media sharing (placeholder)
function shareOnSocial(platform, url) {
    alert(`${platform} platformunda paylaşım yapılacak.`);
}

// Language switcher (placeholder)
function changeLanguage(lang) {
    alert(`Dil ${lang} olarak değiştirilecek.`);
}

// Currency switcher (placeholder)
function changeCurrency(currency) {
    alert(`Para birimi ${currency} olarak değiştirilecek.`);
}

// Accessibility features
function toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
}

function increaseFontSize() {
    const currentSize = parseFloat(getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (currentSize + 2) + 'px';
}

function decreaseFontSize() {
    const currentSize = parseFloat(getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (currentSize - 2) + 'px';
}

// Performance optimization
document.addEventListener('DOMContentLoaded', () => {
    // Preload critical resources
    const criticalImages = [
        // Add critical image URLs here
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

// Analytics tracking (placeholder)
function trackEvent(eventName, eventData) {
    console.log('Event tracked:', eventName, eventData);
    // Implement actual analytics tracking here
}

// A/B testing (placeholder)
function getABTestVariant(testName) {
    // Implement A/B testing logic here
    return Math.random() > 0.5 ? 'A' : 'B';
}

// Personalization (placeholder)
function getPersonalizedContent(userId) {
    // Implement personalization logic here
    return 'personalized_content';
}

// Cache management
function clearCache() {
    if ('caches' in window) {
        caches.keys().then(names => {
            names.forEach(name => {
                caches.delete(name);
            });
        });
    }
}

// Offline functionality (placeholder)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(registration => {
            console.log('ServiceWorker registration successful');
        })
        .catch(err => {
            console.log('ServiceWorker registration failed');
        });
}

// Products Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const sortFilter = document.getElementById('sort-filter');
    const sizeFilters = document.querySelectorAll('.size-filters input[type="checkbox"]');
    const viewButtons = document.querySelectorAll('.view-btn');
    const productsContainer = document.getElementById('products-container');

    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterProducts);
    }

    if (priceFilter) {
        priceFilter.addEventListener('change', filterProducts);
    }

    if (sortFilter) {
        sortFilter.addEventListener('change', filterProducts);
    }

    sizeFilters.forEach(filter => {
        filter.addEventListener('change', filterProducts);
    });

    viewButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            viewButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const view = this.dataset.view;
            if (productsContainer) {
                productsContainer.className = `products-grid ${view === 'list' ? 'list-view' : ''}`;
            }
        });
    });

    function filterProducts() {
        const category = categoryFilter ? categoryFilter.value : '';
        const price = priceFilter ? priceFilter.value : '';
        const sort = sortFilter ? sortFilter.value : '';
        const selectedSizes = Array.from(sizeFilters)
            .filter(filter => filter.checked)
            .map(filter => filter.value);

        const products = document.querySelectorAll('.product-card');
        
        products.forEach(product => {
            let show = true;
            
            // Category filter
            if (category && product.dataset.category !== category) {
                show = false;
            }
            
            // Price filter
            if (price && show) {
                const productPrice = parseFloat(product.dataset.price);
                const [min, max] = price.split('-').map(p => p === '+' ? Infinity : parseFloat(p));
                
                if (productPrice < min || (max !== Infinity && productPrice > max)) {
                    show = false;
                }
            }
            
            // Size filter
            if (selectedSizes.length > 0 && show) {
                const productSizes = Array.from(product.querySelectorAll('.product-sizes span'))
                    .map(span => span.textContent.toLowerCase());
                
                if (!selectedSizes.some(size => productSizes.includes(size))) {
                    show = false;
                }
            }
            
            product.style.display = show ? 'block' : 'none';
        });

        // Update results count
        const visibleProducts = document.querySelectorAll('.product-card[style*="block"], .product-card:not([style*="none"])');
        const resultsInfo = document.querySelector('.results-info');
        if (resultsInfo) {
            resultsInfo.textContent = `${visibleProducts.length} ürün bulundu`;
        }
    }

    // Product actions
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const actionButtons = document.querySelectorAll('.action-btn');

    addToCartButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            
            // Add to cart animation
            addToCartAnimation();
            
            // Show success message
            showNotification(`${productName} sepete eklendi!`, 'success');
        });
    });

    actionButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const action = this.title;
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            
            if (action.includes('Favorilere Ekle')) {
                this.innerHTML = '<i class="fas fa-heart" style="color: #ef4444;"></i>';
                showNotification(`${productName} favorilere eklendi!`, 'success');
            } else if (action.includes('Hızlı Görünüm')) {
                showQuickView(productCard.dataset.id || '1');
            }
        });
    });
});

// Cart Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    const quantityButtons = document.querySelectorAll('.qty-btn');
    const removeButtons = document.querySelectorAll('.remove-btn');
    const clearCartBtn = document.querySelector('.clear-cart-btn');
    const checkoutBtn = document.querySelector('.checkout-btn');

    // Quantity buttons
    quantityButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.parentNode.querySelector('.qty-input');
            const currentValue = parseInt(input.value);
            
            if (this.classList.contains('plus')) {
                input.value = Math.min(currentValue + 1, 10);
            } else if (this.classList.contains('minus')) {
                input.value = Math.max(currentValue - 1, 1);
            }
            
            updateCartItemTotal(this);
            updateCartSummary();
        });
    });

    // Remove buttons
    removeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const cartItem = this.closest('.cart-item');
            cartItem.style.animation = 'slideOut 0.3s ease-out';
            
            setTimeout(() => {
                cartItem.remove();
                updateCartSummary();
            }, 300);
        });
    });

    // Clear cart
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', function() {
            if (confirm('Sepeti temizlemek istediğinizden emin misiniz?')) {
                const cartItems = document.querySelectorAll('.cart-item');
                cartItems.forEach(item => item.remove());
                updateCartSummary();
                showNotification('Sepet temizlendi!', 'info');
            }
        });
    }

    // Checkout
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            showNotification('Ödeme sayfasına yönlendiriliyorsunuz...', 'info');
            // Redirect to checkout page
            setTimeout(() => {
                window.location.href = 'checkout.html';
            }, 1000);
        });
    }

    function updateCartItemTotal(btn) {
        const cartItem = btn.closest('.cart-item');
        const quantity = parseInt(cartItem.querySelector('.qty-input').value);
        const price = parseFloat(cartItem.querySelector('.new-price').textContent.replace(' TL', ''));
        const totalElement = cartItem.querySelector('.total-price');
        
        totalElement.textContent = (quantity * price).toFixed(2) + ' TL';
    }

    function updateCartSummary() {
        const cartItems = document.querySelectorAll('.cart-item');
        let subtotal = 0;
        
        cartItems.forEach(item => {
            const quantity = parseInt(item.querySelector('.qty-input').value);
            const price = parseFloat(item.querySelector('.new-price').textContent.replace(' TL', ''));
            subtotal += quantity * price;
        });
        
        const summaryItems = document.querySelectorAll('.summary-item');
        const totalElement = document.querySelector('.summary-total span:last-child');
        
        if (summaryItems.length > 0) {
            summaryItems[0].querySelector('span:last-child').textContent = subtotal.toFixed(2) + ' TL';
        }
        
        if (totalElement) {
            totalElement.textContent = subtotal.toFixed(2) + ' TL';
        }
    }
});

// Account Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    const accountNavLinks = document.querySelectorAll('.account-nav .nav-link');
    const tabContents = document.querySelectorAll('.tab-content');
    const editBtn = document.querySelector('.edit-btn');
    const saveBtn = document.querySelector('.save-btn');
    const cancelBtn = document.querySelector('.cancel-btn');

    // Tab navigation
    accountNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (this.classList.contains('logout')) {
                if (confirm('Çıkış yapmak istediğinizden emin misiniz?')) {
                    showNotification('Çıkış yapılıyor...', 'info');
                    setTimeout(() => {
                        window.location.href = 'index.html';
                    }, 1000);
                }
                return;
            }
            
            const targetTab = this.getAttribute('href').substring(1);
            
            // Update active states
            accountNavLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Edit profile functionality
    if (editBtn) {
        editBtn.addEventListener('click', function() {
            const formInputs = document.querySelectorAll('.profile-form input, .profile-form select');
            formInputs.forEach(input => input.removeAttribute('readonly'));
            
            this.style.display = 'none';
            saveBtn.style.display = 'inline-block';
            cancelBtn.style.display = 'inline-block';
        });
    }

    if (saveBtn) {
        saveBtn.addEventListener('click', function() {
            const formInputs = document.querySelectorAll('.profile-form input, .profile-form select');
            formInputs.forEach(input => input.setAttribute('readonly', true));
            
            editBtn.style.display = 'inline-block';
            this.style.display = 'none';
            cancelBtn.style.display = 'none';
            
            showNotification('Profil bilgileri güncellendi!', 'success');
        });
    }

    if (cancelBtn) {
        cancelBtn.addEventListener('click', function() {
            const formInputs = document.querySelectorAll('.profile-form input, .profile-form select');
            formInputs.forEach(input => input.setAttribute('readonly', true));
            
            editBtn.style.display = 'inline-block';
            saveBtn.style.display = 'none';
            this.style.display = 'none';
        });
    }

    // Wishlist functionality
    const removeWishlistButtons = document.querySelectorAll('.remove-wishlist');
    removeWishlistButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const wishlistItem = this.closest('.wishlist-item');
            wishlistItem.style.animation = 'slideOut 0.3s ease-out';
            
            setTimeout(() => {
                wishlistItem.remove();
                updateWishlistCount();
            }, 300);
        });
    });

    function updateWishlistCount() {
        const wishlistItems = document.querySelectorAll('.wishlist-item');
        const countElement = document.querySelector('.wishlist-count');
        
        if (countElement) {
            countElement.textContent = `(${wishlistItems.length} ürün)`;
        }
    }
});

// Blog Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const blogArticles = document.querySelectorAll('.blog-article');

    categoryButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Update active state
            categoryButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter articles
            blogArticles.forEach(article => {
                if (category === 'all' || article.dataset.category === category) {
                    article.style.display = 'block';
                    article.style.animation = 'fadeIn 0.5s ease-out';
                } else {
                    article.style.display = 'none';
                }
            });
        });
    });

    // Read more functionality
    const readMoreLinks = document.querySelectorAll('.read-more, .read-more-btn');
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const articleTitle = this.closest('article')?.querySelector('h3')?.textContent || 
                               this.closest('.featured-text')?.querySelector('h2')?.textContent;
            
            showNotification(`${articleTitle} makalesi açılıyor...`, 'info');
            // Redirect to article detail page
            setTimeout(() => {
                window.location.href = 'article-detail.html';
            }, 1000);
        });
    });
});

// Campaigns Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Countdown timer
    function updateCountdown() {
        const countdownItems = document.querySelectorAll('.countdown-item');
        
        countdownItems.forEach(item => {
            const numberElement = item.querySelector('.number');
            let currentNumber = parseInt(numberElement.textContent);
            
            if (currentNumber > 0) {
                currentNumber--;
                numberElement.textContent = currentNumber.toString().padStart(2, '0');
            }
        });
    }

    // Update countdown every second
    setInterval(updateCountdown, 1000);

    // Flash sale functionality
    const flashProducts = document.querySelectorAll('.flash-product');
    flashProducts.forEach(product => {
        const buyButton = product.querySelector('.btn');
        if (buyButton) {
            buyButton.addEventListener('click', function() {
                const productName = product.querySelector('h3').textContent;
                showNotification(`${productName} sepete eklendi!`, 'success');
                addToCartAnimation();
            });
        }
    });

    // Campaign cards functionality
    const campaignCards = document.querySelectorAll('.campaign-card');
    campaignCards.forEach(card => {
        const buyButton = card.querySelector('.btn');
        if (buyButton) {
            buyButton.addEventListener('click', function() {
                const campaignName = card.querySelector('h3').textContent;
                showNotification(`${campaignName} kampanyasına yönlendiriliyorsunuz...`, 'info');
                
                // Redirect to products page with campaign filter
                setTimeout(() => {
                    window.location.href = 'products.html?campaign=' + encodeURIComponent(campaignName);
                }, 1000);
            });
        }
    });
});

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#1e3a8a'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(-100%);
        }
    }
    
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        60% {
            transform: translateY(-5px);
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
    
    .products-grid.list-view {
        grid-template-columns: 1fr;
    }
    
    .products-grid.list-view .product-card {
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 2rem;
        align-items: center;
    }
    
    .products-grid.list-view .product-image {
        width: 150px;
        height: 150px;
    }
    
    .products-grid.list-view .product-info {
        text-align: left;
    }
    
    .products-grid.list-view .add-to-cart-btn {
        width: auto;
        padding: 0.75rem 1.5rem;
    }
`;
document.head.appendChild(style); 