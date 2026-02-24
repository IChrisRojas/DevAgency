# Performance Optimization & Lightweight Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Consolidate animation libraries and optimize WebGL background to improve application performance and reduce bundle size.

**Architecture:** We will replace Framer Motion with GSAP in the Hero section, reduce WebGL vertex counts by 75% for better GPU performance, and implement conditional post-processing for mobile devices. We will also optimize resource loading in the Layout component.

**Tech Stack:** Astro, GSAP, Three.js, React, Tailwind CSS.

---

### Task 1: Remove Framer Motion and Install Necessary Dependencies

**Files:**
- Modify: `package.json`
- Modify: `src/components/Hero.astro`

**Step 1: Uninstall framer-motion and ensure GSAP is available**

Run: `npm uninstall framer-motion`
Run: `npm install gsap` (already there, but ensuring version)

**Step 2: Remove framer-motion imports from Hero.astro**

Modify: `src/components/Hero.astro:68-81`
Remove: `import { animate, stagger } from "framer-motion";`

**Step 3: Commit changes**

```bash
git add package.json src/components/Hero.astro
git commit -m "refactor: remove framer-motion and prepare for GSAP migration"
```

---

### Task 2: Implement GSAP Hero Animations

**Files:**
- Modify: `src/components/Hero.astro:68-81`

**Step 1: Replace Framer Motion animation with GSAP in Hero.astro**

```javascript
<script>
    import gsap from "gsap";

    document.addEventListener("DOMContentLoaded", () => {
        gsap.to(".hero-entry", {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            force3D: true
        });
    });
</script>
```

**Step 2: Verify animation in browser (manual check)**

**Step 3: Commit**

```bash
git add src/components/Hero.astro
git commit -m "feat: migrate hero animations to GSAP"
```

---

### Task 3: Optimize WebGL Geometry and Vertex Counts

**Files:**
- Modify: `src/components/WebGLBackground.astro:123-125`

**Step 1: Reduce Sphere and Cone geometry resolution**

Modify: `src/components/WebGLBackground.astro`
Change: `new SphereGeometry(1.5, 64, 64)` to `new SphereGeometry(1.5, 32, 32)`
Change: `new ConeGeometry(1.5, 3, 64, 64)` to `new ConeGeometry(1.5, 3, 32, 32)`

**Step 2: Commit**

```bash
git add src/components/WebGLBackground.astro
git commit -m "perf: reduce WebGL vertex counts by 75%"
```

---

### Task 4: Implement Conditional Post-Processing for Mobile

**Files:**
- Modify: `src/components/WebGLBackground.astro:110-120`

**Step 1: Detect mobile devices and conditionally enable Bloom**

Modify: `src/components/WebGLBackground.astro`
Add detection:
```javascript
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const useBloom = !isMobile; // Disable bloom on mobile for performance
```

**Step 2: Update EffectComposer to skip bloom if useBloom is false**

**Step 3: Commit**

```bash
git add src/components/WebGLBackground.astro
git commit -m "perf: disable WebGL bloom on mobile devices"
```

---

### Task 5: Debounce Window Resize Event

**Files:**
- Modify: `src/components/WebGLBackground.astro:180-185`

**Step 1: Implement debounce for the resize listener**

Modify: `src/components/WebGLBackground.astro`
```javascript
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        composer.setSize(window.innerWidth, window.innerHeight);
    }, 250);
});
```

**Step 2: Commit**

```bash
git add src/components/WebGLBackground.astro
git commit -m "perf: debounce window resize event for WebGL"
```

---

### Task 6: Strategic Resource Loading (Fonts)

**Files:**
- Modify: `src/layouts/Layout.astro`

**Step 1: Add font-display: swap to Google Fonts link**

Modify: `src/layouts/Layout.astro:22-25`
Add: `&display=swap` to the href.

**Step 2: Commit**

```bash
git add src/layouts/Layout.astro
git commit -m "perf: optimize font loading with font-display swap"
```
