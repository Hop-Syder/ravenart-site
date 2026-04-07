import './style.css';
import { initAnimations } from './animations.js';

// Mobile Navigation Toggle
const navbar = document.querySelector('.navbar');
const navbarToggle = document.querySelector('.navbar__toggle');
const navbarMenu = document.querySelector('.navbar__menu');

function syncNavbarHeight() {
  if (!navbar) return;

  document.documentElement.style.setProperty('--navbar-height', `${navbar.offsetHeight}px`);
}

syncNavbarHeight();

window.addEventListener('resize', syncNavbarHeight);
window.addEventListener('load', syncNavbarHeight);

if (navbarToggle && navbarMenu) {
  navbarToggle.addEventListener('click', () => {
    const isExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';
    navbarToggle.setAttribute('aria-expanded', !isExpanded);
    navbarMenu.classList.toggle('navbar__menu--open');
  });
}

// Close mobile menu when clicking on a link
const navbarLinks = document.querySelectorAll('.navbar__link');
navbarLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navbarMenu) {
      navbarMenu.classList.remove('navbar__menu--open');
      navbarToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Smooth scroll for anchor links
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

// Initialize cinematic animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  syncNavbarHeight();
  initAnimations();
});

console.log('RavenArt - Site loaded successfully');
