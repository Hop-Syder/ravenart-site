import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * RAVENART - Cinematic Animations Module
 * Black & White Premium Animation System
 */

// === Navigation Animation ===
export function animateNavbar() {
    const navbar = document.querySelector('.navbar');

    if (!navbar) return;

    // Initial state
    gsap.set(navbar, {
        y: -100,
        opacity: 0
    });

    // Animate in
    gsap.to(navbar, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2
    });
}

// === Hero Eyebrow Animation ===
export function animateHeroEyebrow() {
    const eyebrows = document.querySelectorAll('.services-hero__eyebrow');

    if (eyebrows.length === 0) return;

    gsap.set(eyebrows, {
        opacity: 0,
        x: -20,
        filter: 'blur(10px)'
    });

    gsap.to(eyebrows, {
        opacity: 0.9,
        x: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.3
    });
}

// === Hero H1 Split Text Animation ===
export function animateHeroTitle() {
    const heroTitles = document.querySelectorAll('.hero__title');

    heroTitles.forEach(title => {
        // Split text into characters
        const split = new SplitType(title, {
            types: 'chars',
            tagName: 'span'
        });

        // Set initial state
        gsap.set(split.chars, {
            opacity: 0,
            y: 100,
            rotateX: -90,
            transformOrigin: '50% 50% -50'
        });

        // Animate characters in sequence
        gsap.to(split.chars, {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1.2,
            stagger: 0.03,
            ease: 'back.out(1.7)',
            delay: 0.5
        });
    });
}

// === H2 Split Text Animation (Scroll-Triggered) ===
export function animateH2Titles() {
    const h2Titles = document.querySelectorAll('h2:not(.hero__title)');

    h2Titles.forEach(h2 => {
        // Skip if already has animation class
        if (h2.classList.contains('anim-h2-split')) return;

        // Mark as animated
        h2.classList.add('anim-h2-split');

        // Split text into characters
        const split = new SplitType(h2, {
            types: 'chars',
            tagName: 'span'
        });

        // Set initial state
        gsap.set(split.chars, {
            opacity: 0,
            y: 60,
            rotateX: -45,
            transformOrigin: '50% 50% -50'
        });

        // Create scroll trigger
        ScrollTrigger.create({
            trigger: h2,
            start: 'top 85%',
            onEnter: () => {
                // Animate characters in sequence
                gsap.to(split.chars, {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    duration: 1,
                    stagger: 0.02,
                    ease: 'power2.out'
                });
            },
            once: true
        });
    });
}

// === Typing Animation for Subtitles ===
export function animateTypingText() {
    const subtitles = document.querySelectorAll('.hero__subtitle');

    subtitles.forEach(subtitle => {
        const text = subtitle.textContent;
        subtitle.textContent = '';
        subtitle.style.opacity = '1';

        // Create cursor
        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        cursor.innerHTML = '|';
        subtitle.parentNode.appendChild(cursor);

        // Cursor blink animation
        gsap.to(cursor, {
            opacity: 0,
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'steps(1)'
        });

        // Typing animation
        let charIndex = 0;
        const typingSpeed = 0.05;

        function typeChar() {
            if (charIndex < text.length) {
                subtitle.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, typingSpeed * 1000);
            } else {
                // Remove cursor after typing completes
                gsap.to(cursor, {
                    opacity: 0,
                    duration: 0.3,
                    delay: 1
                });
            }
        }

        // Start typing after title animation
        setTimeout(typeChar, 1500);
    });
}

// === Hero CTA Buttons Animation ===
export function animateHeroCTA() {
    const ctaContainer = document.querySelector('.hero__cta');

    if (!ctaContainer) return;

    const buttons = ctaContainer.querySelectorAll('.btn');

    gsap.set(buttons, {
        opacity: 0,
        y: 30
    });

    gsap.to(buttons, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 2
    });
}

// === Section Headers Animation ===
export function animateSectionHeaders() {
    const sectionHeaders = document.querySelectorAll('h2, h3');

    sectionHeaders.forEach(header => {
        // Skip hero titles (already animated)
        if (header.classList.contains('hero__title')) return;

        // Set initial state
        gsap.set(header, {
            opacity: 0,
            y: 40
        });

        // Create scroll trigger
        ScrollTrigger.create({
            trigger: header,
            start: 'top 85%',
            onEnter: () => {
                gsap.to(header, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out'
                });
            },
            once: true
        });
    });
}

// === Cards Staggered Animation ===
export function animateCards() {
    const cardSections = document.querySelectorAll('.grid');

    cardSections.forEach(section => {
        const cards = section.querySelectorAll('.card, .video-card');

        if (cards.length === 0) return;

        // Set initial state
        gsap.set(cards, {
            opacity: 0,
            y: 60,
            scale: 0.95
        });

        // Create scroll trigger
        ScrollTrigger.create({
            trigger: section,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(cards, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power2.out'
                });
            },
            once: true
        });
    });
}

// === Video Cards Special Animation ===
export function animateVideoCards() {
    const videoCards = document.querySelectorAll('.video-card');

    videoCards.forEach((card, index) => {
        const placeholder = card.querySelector('.video-placeholder');
        const icon = card.querySelector('.video-placeholder__icon');

        if (!placeholder || !icon) return;

        // Set initial state
        gsap.set(placeholder, {
            scale: 0.8,
            opacity: 0
        });

        // Create scroll trigger
        ScrollTrigger.create({
            trigger: card,
            start: 'top 85%',
            onEnter: () => {
                // Animate placeholder
                gsap.to(placeholder, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.6,
                    ease: 'back.out(1.7)',
                    delay: index * 0.1
                });

                // Pulse animation for play icon
                gsap.to(icon, {
                    scale: 1.2,
                    duration: 1.5,
                    repeat: -1,
                    yoyo: true,
                    ease: 'power1.inOut',
                    delay: 1
                });
            },
            once: true
        });
    });
}

// === Filter Buttons Animation ===
export function animateFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    if (filterButtons.length === 0) return;

    gsap.set(filterButtons, {
        opacity: 0,
        y: 20
    });

    gsap.to(filterButtons, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.5
    });
}

// === Form Elements Animation ===
export function animateFormElements() {
    const formGroups = document.querySelectorAll('.form-group');

    if (formGroups.length === 0) return;

    gsap.set(formGroups, {
        opacity: 0,
        x: -30
    });

    ScrollTrigger.create({
        trigger: formGroups[0],
        start: 'top 85%',
        onEnter: () => {
            gsap.to(formGroups, {
                opacity: 1,
                x: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power2.out'
            });
        },
        once: true
    });
}

// === Footer Animation ===
export function animateFooter() {
    const footer = document.querySelector('.footer');

    if (!footer) return;

    const footerSections = footer.querySelectorAll('.footer__section');

    gsap.set(footerSections, {
        opacity: 0,
        y: 30
    });

    ScrollTrigger.create({
        trigger: footer,
        start: 'top 95%',
        onEnter: () => {
            gsap.to(footerSections, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: 'power2.out'
            });
        },
        once: true
    });
}

// === Parallax Effect for Hero ===
export function addHeroParallax() {
    const heroVideo = document.querySelector('.hero__video');
    const heroContent = document.querySelector('.hero__content');

    if (!heroVideo || !heroContent) return;

    gsap.to(heroVideo, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    gsap.to(heroContent, {
        yPercent: -20,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: '50% top',
            scrub: true
        }
    });
}

// === Text Reveal Animation (for paragraphs) ===
export function animateTextReveal() {
    const paragraphs = document.querySelectorAll('p:not(.hero__subtitle):not(.card__text):not(.video-card__description)');

    paragraphs.forEach(p => {
        gsap.set(p, {
            opacity: 0,
            y: 20
        });

        ScrollTrigger.create({
            trigger: p,
            start: 'top 90%',
            onEnter: () => {
                gsap.to(p, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power2.out'
                });
            },
            once: true
        });
    });
}

// === Process Steps Animation (for Services page) ===
export function animateProcessSteps() {
    const steps = document.querySelectorAll('.grid--4 > div');

    if (steps.length === 0) return;

    gsap.set(steps, {
        opacity: 0,
        scale: 0.8
    });

    ScrollTrigger.create({
        trigger: steps[0].parentElement,
        start: 'top 80%',
        onEnter: () => {
            gsap.to(steps, {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'back.out(1.7)'
            });
        },
        once: true
    });
}

// === Initialize All Animations ===
export function initAnimations() {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        // Skip animations for users who prefer reduced motion
        console.log('Reduced motion preference detected - animations disabled');
        return;
    }

    // Page load animations
    animateNavbar();
    animateHeroEyebrow();
    animateHeroTitle();
    animateTypingText();
    animateHeroCTA();

    // Scroll-triggered animations
    animateH2Titles();
    animateSectionHeaders();
    animateCards();
    animateVideoCards();
    animateFilterButtons();
    animateFormElements();
    animateFooter();
    animateTextReveal();
    animateProcessSteps();

    // Parallax effects
    addHeroParallax();

    console.log('RavenArt animations initialized');
}

// === Utility: Refresh ScrollTrigger on route change ===
export function refreshAnimations() {
    ScrollTrigger.refresh();
}
