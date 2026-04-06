# 🎬 Animations Quick Reference

## What You'll See When You Load the Site

### 🏠 Homepage (/)

**On Page Load:**
1. ⬇️ Navbar slides down from top (0.2s delay)
2. ✨ "RAVENART" title - each letter pops in with 3D rotation (0.5s delay)
3. ⌨️ Subtitle types out character by character with blinking cursor (1.5s delay)
4. 🔘 Two CTA buttons fade in and slide up (2s delay)

**On Scroll:**
- 🌊 Hero video moves slower than scroll (parallax)
- 📜 Section titles fade in when they appear
- 🃏 Service cards cascade in sequence
- 🦶 Footer sections reveal one by one

---

### 💼 Services (/services.html)

**On Page Load:**
1. ⬇️ Navbar slides down
2. ✨ "Nos Services" H1 split text animation

**On Scroll:**
- 📜 "Nos Expertises" title fades in
- 🃏 6 service cards stagger in (0.15s apart)
- 🔄 Process steps (01-04) bounce in with scale effect
- 📝 Each step description fades in

---

### 🎥 Projects (/projects.html)

**On Page Load:**
1. ⬇️ Navbar slides down
2. ✨ "Nos Projets" H1 split text
3. 🎚️ Filter buttons fade in sequentially

**On Scroll:**
- 📜 "Vue Desktop" / "Vue Mobile" titles fade in
- 🎬 Video cards scale up with pulsing play icons
- 🃏 Cards appear in cascading pattern
- 🦶 Footer reveals at bottom

**On Filter Click:**
- Videos fade out/in based on category
- Smooth 0.3s transition

---

### ℹ️ About (/about.html)

**On Page Load:**
1. ⬇️ Navbar slides down
2. ✨ "Notre Histoire" H1 animation

**On Scroll:**
- 📖 Story paragraphs fade in gently
- 💎 Value cards (Excellence, Authenticité, Innovation) stagger in
- 💭 Philosophy quote emphasizes
- 🎯 Approach icons pop in

---

### 📧 Contact (/contact.html)

**On Page Load:**
1. ⬇️ Navbar slides down
2. ✨ "Contactez-nous" H1 split text

**On Scroll:**
- 📝 Form fields slide in from left (one by one)
- ❓ FAQ cards cascade down
- 🦶 Footer sections reveal

---

## 🎯 Animation Timing Summary

```
Page Load Timeline:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
0ms          ██ Navbar starts
200ms        ████ H1 starts (split text)
500ms        ████████████ Typing starts
1500ms       ████████████████ CTAs start
2000ms+      [Scroll animations activate]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## 🎨 Visual Effects

### Split Text (H1 Titles)
```
Before: RAVENART (invisible)
After:  R → A → V → E → N → A → R → T
        ↑   ↑   ↑   ↑   ↑   ↑   ↑   ↑
       Each letter rotates in from below
```

### Typing Effect
```
Frame 1: A|
Frame 2: Ag|
Frame 3: Age|
Frame 4: Agence|
...continues until complete
```

### Card Stagger
```
Card 1: ░░░ → ███ (0ms)
Card 2: ░░░ → ███ (150ms later)
Card 3: ░░░ → ███ (150ms later)
Card 4: ░░░ → ███ (150ms later)
```

### Parallax
```
Viewport:  [============]
Hero BG:   Moves at 30% speed ↓
Content:   Moves at -20% speed ↑
Result:    Depth illusion
```

---

## ⚙️ Technical Details

**Libraries Used:**
- GSAP 3.14.2 (animation engine)
- SplitType 0.3.4 (text splitting)
- ScrollTrigger (scroll-based triggers)

**Performance:**
- 60 FPS on modern devices
- GPU-accelerated transforms
- Respects `prefers-reduced-motion`

**File Size:**
- animations.js: ~10KB (minified ~5KB)
- No external CSS needed
- Zero impact on initial load

---

## 🎮 Interactive Elements

### Hover Effects (CSS)
- **Buttons**: Background/color invert (white ↔ black)
- **Cards**: Lift up 8px + shadow
- **Links**: Underline grows from left
- **Video Icons**: Scale up 1.1x + glow

### Click Effects
- **Filter Buttons**: Instant state change
- **Mobile Menu**: Slide-in from left
- **Form Submit**: Alert message

---

## 🐛 If Animations Don't Work

**Quick Fixes:**
1. Hard refresh: `Ctrl+Shift+R` (Linux/Windows) or `Cmd+Shift+R` (Mac)
2. Check console for errors: `F12` → Console tab
3. Disable reduced motion: Browser settings → Accessibility

**Common Issues:**
- ❌ Ad blockers blocking GSAP CDN
- ✅ Solution: GSAP is bundled locally (no CDN)
- ❌ Old browser without ES6 support
- ✅ Solution: Modern browsers only (Chrome, Firefox, Safari, Edge)

---

## 🎬 Want to See All Animations?

**Test Sequence:**
1. Open homepage: http://localhost:5174/
2. Watch navbar slide down
3. Watch "RAVENART" letters pop in
4. Watch subtitle type out
5. Watch buttons appear
6. Scroll down slowly
7. Observe cards cascading in
8. Repeat on other pages

**Pro Tip:** Open DevTools (`F12`) → Performance tab → Record while scrolling to see animation frames!

---

## 📱 Mobile Behavior

Animations are **simplified on mobile** for performance:
- ⚡ Faster durations (0.6s vs 0.8s)
- 🚫 No parallax (too heavy)
- ✅ All other animations work normally
- ♿ Respects system animation preferences

---

**Enjoy the cinematic experience!** 🎥✨
