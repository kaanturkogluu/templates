// Acboztech Elektronik Mağazası - script.js
// Minimum düzeyde JS: Mobil menü aç/kapat

document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('nav ul');
  const burger = document.querySelector('.burger');
  if (burger && nav) {
    burger.addEventListener('click', function() {
      nav.classList.toggle('open');
    });
  }
});

// Slider otomatik geçiş ve nokta kontrolü
(function() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.slider-dot');
  if (!slides.length) return;
  let current = 0;
  function showSlide(idx) {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === idx);
      if (dots[i]) dots[i].classList.toggle('active', i === idx);
    });
    current = idx;
  }
  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }
  let interval = setInterval(nextSlide, 4000);
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i);
      clearInterval(interval);
      interval = setInterval(nextSlide, 4000);
    });
  });
})();

// Mobil menü UX geliştirme
(function() {
  const nav = document.querySelector('nav ul');
  const burger = document.querySelector('.burger');
  const overlay = document.querySelector('.nav-overlay');
  function closeMenu() {
    nav.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    if (burger) burger.setAttribute('aria-expanded', 'false');
  }
  function openMenu() {
    nav.classList.add('open');
    if (overlay) overlay.classList.add('open');
    if (burger) burger.setAttribute('aria-expanded', 'true');
  }
  if (burger && nav && overlay) {
    burger.addEventListener('click', function() {
      if (nav.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
    burger.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (nav.classList.contains('open')) {
          closeMenu();
        } else {
          openMenu();
        }
      }
    });
    overlay.addEventListener('click', closeMenu);
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeMenu();
    });
  }
})(); 