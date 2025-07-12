document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      const expanded = navLinks.style.display === 'flex';
      navLinks.style.display = expanded ? 'none' : 'flex';
      navToggle.setAttribute('aria-expanded', !expanded);
    });
    // Hide menu on resize if desktop
    window.addEventListener('resize', function() {
      if (window.innerWidth > 700) {
        navLinks.style.display = 'flex';
      } else {
        navLinks.style.display = 'none';
      }
    });
    // Initial state
    if (window.innerWidth <= 700) {
      navLinks.style.display = 'none';
    }
  }
}); 