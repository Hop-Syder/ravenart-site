# 🎬 RavenArt Cinematic Animations - Complete Guide

## Overview

Premium cinematic animations have been added to all pages using **GSAP** (GreenSock Animation Platform) and **SplitType**, creating a luxurious black & white experience that enhances the RavenArt brand identity.

## ✨ Animation Features Implemented

### 1. **H1 Split Text Animation** 🎯
Each H1 title is split into individual characters that animate in sequence with a 3D rotation effect.

**Effect:**
- Characters start: invisible, 100px below, rotated -90° on X-axis
- Animate to: visible, original position, no rotation
- Stagger: 0.03s between each character
- Easing: `back.out(1.7)` for elastic bounce effect
- Duration: 1.2s total

**Example:**
```
RAVENART → R (0ms) → A (30ms) → V (60ms) → E (90ms) → N (120ms) → ...
```

### 2. **Typing Animation for Subtitles** ⌨️
Hero subtitles appear as if being typed in real-time with a blinking cursor.

**Effect:**
- Cursor blinks continuously during typing
- Each character appears every 50ms
- Starts 1.5s after page load (after H1 animation)
- Cursor fades out 1s after typing completes

**Visual:**
```
Agence Audiovisuelle Premium — Bénin|
                                    ↑ blinking cursor
```

### 3. **Navigation Entrance** 🧭
The navbar slides down from above with fade-in effect.

**Timeline:**
- Start: 100px above viewport, opacity 0
- End: Normal position, opacity 1
- Duration: 0.8s
- Delay: 0.2s after page load
- Easing: `power3.out`

### 4. **Hero CTA Buttons** 🔘
Call-to-action buttons fade in and slide up sequentially.

**Effect:**
- Start: 30px below, invisible
- Stagger: 0.2s between buttons
- Duration: 0.8s
- Delay: 2s (after title + subtitle)

### 5. **Scroll-Triggered Section Headers** 📜
All H2 and H3 headings animate when scrolling into view.

**Effect:**
- Start: 40px below, opacity 0
- Trigger: When element reaches 85% of viewport
- Duration: 0.8s
- Fires once (doesn't repeat on scroll up)

### 6. **Cards Staggered Reveal** 🃏
Cards appear in sequence with scale and fade effects.

**Effect:**
- Start: 60px below, 95% scale, opacity 0
- Stagger: 0.15s between cards
- Scale animates to 100%
- Creates cascading visual flow

### 7. **Video Cards Special Animation** 🎥
Video placeholders have unique entrance with pulsing play icon.

**Effects:**
- Placeholder scales from 80% to 100%
- Play icon pulses continuously (scale 1.0 ↔ 1.2)
- Pulse duration: 1.5s infinite loop
- Creates attention-grabbing effect

### 8. **Filter Buttons Animation** 🎚️
Project filter buttons fade in sequentially on Projects page.

**Effect:**
- Start: 20px below, opacity 0
- Stagger: 0.1s
- Delay: 0.5s after page load

### 9. **Form Elements Slide-In** 📝
Contact form fields slide in from left on scroll.

**Effect:**
- Start: 30px left, opacity 0
- Stagger: 0.1s between fields
- Smooth horizontal reveal

### 10. **Footer Sections Reveal** 🦶
Footer columns fade in sequentially.

**Effect:**
- Start: 30px below, opacity 0
- Stagger: 0.15s
- Trigger: When footer enters viewport (95%)

### 11. **Hero Parallax Effect** 🌊
Hero video and content move at different speeds while scrolling.

**Effect:**
- Video scrolls slower (30% speed)
- Content scrolls faster upward (-20%)
- Content fades out at 50% scroll
- Creates depth and immersion

### 12. **Text Reveal for Paragraphs** 📖
Body paragraphs fade in gently when scrolling.

**Effect:**
- Start: 20px below, opacity 0
- Trigger: 90% of viewport
- Duration: 0.6s
- Subtle, non-distracting

### 13. **Process Steps Animation** 🔄
4-step process on Services page scales up with bounce.

**Effect:**
- Start: 80% scale, opacity 0
- Stagger: 0.2s
- Easing: `back.out(1.7)` for bounce
- Numbers (01, 02, 03, 04) pop in dramatically

## 🎨 Design Principles

### Black & White Aesthetic
All animations maintain the monochrome palette:
- **No colored animations** - only opacity, position, scale, rotation
- **White text reveals** on dark backgrounds
- **Smooth grayscale transitions**
- **Elegant timing** - never rushed or chaotic

### Cinematic Feel
- **Slow, deliberate movements** (0.6s - 1.2s durations)
- **Easing functions** that feel natural (power2, power3, back.out)
- **Staggered sequences** create rhythm
- **Parallax scrolling** adds depth

### Premium Experience
- **No jarring movements** - everything flows smoothly
- **Respects user preferences** - disabled if `prefers-reduced-motion`
- **Performance optimized** - uses `will-change` and GPU acceleration
- **Consistent timing** - follows established patterns

## 📁 File Structure

```
src/
├── animations.js          ← Main animation module (447 lines)
├── main.js                ← Initializes animations
└── style.css              ← Animation helper classes (+24 lines)
```

## 🔧 Technical Implementation

### GSAP Plugins Used
```javascript
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);
```

### Key Functions

**1. animateHeroTitle()** - H1 split text
```javascript
const split = new SplitType(title, { types: 'chars' });
gsap.to(split.chars, {
  opacity: 1,
  y: 0,
  rotateX: 0,
  stagger: 0.03,
  ease: 'back.out(1.7)'
});
```

**2. animateTypingText()** - Typewriter effect
```javascript
function typeChar() {
  if (charIndex < text.length) {
    subtitle.textContent += text.charAt(charIndex);
    charIndex++;
    setTimeout(typeChar, 50);
  }
}
```

**3. animateCards()** - Staggered card reveal
```javascript
ScrollTrigger.create({
  trigger: section,
  start: 'top 80%',
  onEnter: () => {
    gsap.to(cards, {
      opacity: 1,
      y: 0,
      scale: 1,
      stagger: 0.15
    });
  },
  once: true
});
```

## ♿ Accessibility

### Respects User Preferences
```javascript
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

if (prefersReducedMotion) {
  // Skip all animations
  return;
}
```

### Keyboard Navigation
- All animations are CSS/GSAP-based (no mouse dependency)
- Focus states remain visible during animations
- No animation traps keyboard focus

### Screen Readers
- Text animations don't affect DOM order
- ARIA labels remain intact
- Content is readable even if animations fail

## 🚀 Performance Optimizations

### 1. Will-Change Property
```css
.char {
  will-change: transform, opacity;
}
```
Tells browser to optimize for these properties.

### 2. GPU Acceleration
All animations use:
- `transform` (GPU-accelerated)
- `opacity` (composite-only property)
- No `left`, `top`, `width`, `height` (causes layout thrashing)

### 3. ScrollTrigger Efficiency
```javascript
ScrollTrigger.create({
  once: true  // Animation fires only once
});
```
Prevents repeated calculations on scroll.

### 4. Debounced Events
GSAP internally debounces scroll events for smooth performance.

## 🎬 Animation Timeline (Page Load)

```
0ms     ── Page loads
200ms   ── Navbar slides down (0.8s duration)
500ms   ── H1 split text starts (1.2s duration)
1500ms  ── Typing animation starts (~3s for full text)
2000ms  ── CTA buttons fade in (0.8s duration)
        ── User scrolls...
        ── Sections animate on scroll (triggered individually)
```

## 📱 Responsive Behavior

Animations adapt to screen size:

**Desktop (1024px+)**
- Full parallax effects
- All staggered animations
- Smooth scroll triggers

**Tablet (768-1023px)**
- Reduced parallax intensity
- Same stagger timing
- Optimized trigger points

**Mobile (<768px)**
- Parallax disabled (performance)
- Faster animations (0.6s instead of 0.8s)
- Simplified easing

## 🐛 Troubleshooting

### Animations Not Playing?

**Check 1:** Console for errors
```javascript
console.log('RavenArt animations initialized');
// Should appear in console
```

**Check 2:** Reduced motion preference
```javascript
// In browser console:
window.matchMedia('(prefers-reduced-motion: reduce)').matches
// Should be false for animations to play
```

**Check 3:** GSAP loaded
```javascript
// In browser console:
typeof gsap
// Should return "object"
```

### Animations Too Fast/Slow?

Adjust in `src/animations.js`:
```javascript
// Slower
duration: 1.5  // Instead of 0.8

// Faster
duration: 0.4  // Instead of 0.8
```

### Typing Animation Not Working?

Ensure subtitle exists:
```html
<p class="hero__subtitle">Your text here</p>
```

### Scroll Triggers Not Firing?

Refresh manually:
```javascript
import { refreshAnimations } from './animations.js';
refreshAnimations();
```

## 🎨 Customization Examples

### Change H1 Animation Style

**Current:** 3D rotation from below
```javascript
rotateX: -90,
y: 100
```

**Alternative:** Slide from left
```javascript
x: -100,
rotateX: 0
```

**Alternative:** Fade in place
```javascript
opacity: 0,
y: 0
```

### Adjust Typing Speed

```javascript
const typingSpeed = 0.05; // 50ms per character

// Slower
const typingSpeed = 0.1; // 100ms per character

// Faster
const typingSpeed = 0.02; // 20ms per character
```

### Modify Card Stagger

```javascript
stagger: 0.15  // Current (150ms between cards)

// Faster cascade
stagger: 0.08  // 80ms

// More dramatic
stagger: 0.25  // 250ms
```

### Add New Animation

```javascript
export function animateCustomElement() {
  const elements = document.querySelectorAll('.your-class');
  
  gsap.set(elements, {
    opacity: 0,
    y: 50
  });
  
  ScrollTrigger.create({
    trigger: elements[0],
    start: 'top 85%',
    onEnter: () => {
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
      });
    },
    once: true
  });
}

// Add to initAnimations()
animateCustomElement();
```

## 📊 Animation Inventory by Page

### All Pages (Global)
- ✅ Navbar entrance
- ✅ Section headers scroll reveal
- ✅ Cards staggered animation
- ✅ Footer sections reveal
- ✅ Text paragraphs fade-in

### Homepage (`/`)
- ✅ H1 split text ("RAVENART")
- ✅ Typing subtitle animation
- ✅ Hero CTA buttons
- ✅ Hero parallax effect

### Services (`/services.html`)
- ✅ Process steps (01-04) bounce animation
- ✅ Service cards staggered reveal

### Projects (`/projects.html`)
- ✅ Filter buttons fade-in
- ✅ Video cards special animation
- ✅ Video placeholder pulse effect

### About (`/about.html`)
- ✅ Philosophy quote emphasis
- ✅ Value cards staggered reveal

### Contact (`/contact.html`)
- ✅ Form fields slide-in from left
- ✅ FAQ cards sequential reveal

## 🎯 Best Practices

### DO ✅
- Use ScrollTrigger for scroll-based animations
- Keep durations between 0.6s - 1.2s
- Use `ease: 'power2.out'` or `'power3.out'` for elegance
- Set `once: true` to prevent re-animation
- Respect `prefers-reduced-motion`

### DON'T ❌
- Don't animate colors (breaks B&W aesthetic)
- Don't use durations < 0.3s (feels rushed)
- Don't animate more than 3 properties simultaneously
- Don't create infinite loops (except cursor blink)
- Don't ignore mobile performance

## 🔮 Future Enhancements

Potential additions:
1. **Page transition animations** (fade between pages)
2. **Mouse-follow effects** (subtle parallax on cursor)
3. **Video hover previews** (play on hover)
4. **Loading screen** (animated RavenArt logo)
5. **Scroll progress indicator** (top bar)
6. **Magnetic buttons** (attract to cursor)
7. **Text scramble effect** (Matrix-style decode)
8. **Image reveal masks** (wipe transitions)

---

## Summary

🎬 **13 unique animations** implemented across all pages  
⚡ **GPU-accelerated** for smooth 60fps performance  
♿ **Fully accessible** with reduced motion support  
🎨 **Black & white aesthetic** maintained throughout  
📱 **Responsive** - adapts to all screen sizes  
🚀 **Production-ready** - optimized and tested  

**Your RavenArt site now has premium cinematic animations!** ✨🖤🤍
