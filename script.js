// Mobile nav toggle
const mobileToggle = document.getElementById('mobile-toggle');
const navLinks = document.querySelector('.nav-links');
if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// Set footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Intersection observer for reveal animations
const animated = document.querySelectorAll('[data-animate]');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('show');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });
animated.forEach(el => io.observe(el));

// Tabs: show/hide project categories
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.project-content');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const id = tab.dataset.tab;
    contents.forEach(c => c.classList.remove('active'));
    const active = document.getElementById(id);
    if (active) active.classList.add('active');
  });
});
