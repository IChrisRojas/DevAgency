# Design: Performance Optimization & Lightweight Implementation

**Date:** 2026-02-24
**Topic:** Reducing bundle size and optimizing runtime performance for DevAgency application.

## 1. Overview
The current application uses multiple animation libraries (GSAP and Framer Motion) and unoptimized WebGL geometries, leading to increased bundle size and high GPU usage. This design aims to achieve a "premium feel" with a "lightweight" footprint by consolidating dependencies and refining resource-intensive components.

## 2. Animation Library Consolidation (GSAP)
- **Problem:** Redundancy between GSAP and Framer Motion.
- **Solution:** 
    - Remove `framer-motion` from `package.json`.
    - Replace the Hero section animations (currently using `framer-motion`) with a native GSAP implementation.
- **Benefit:** ~30kb (Gzipped) reduction in initial JS bundle and more consistent animation timing.

## 3. WebGL Background Refinement (Three.js)
- **Problem:** High vertex counts and expensive post-processing (UnrealBloomPass) on all devices.
- **Solution:**
    - **Vertex Reduction:** Change `SphereGeometry` and `ConeGeometry` from `64, 64` segments to `32, 32` or even `16, 16` for mobile.
    - **Conditional Post-processing:** Detect mobile devices or low-performance hardware and disable `EffectComposer`/`UnrealBloomPass` if necessary.
    - **Debounced Resize:** Add a debounce mechanism to the window `resize` event to prevent excessive layout recalculations.
    - **Memory Cleanup:** Implement proper `.dispose()` calls for geometries, materials, and textures when the component is unmounted or updated.

## 4. Strategic Resource Loading & Hydration
- **Problem:** Google Fonts and React hydration can block the main thread.
- **Solution:**
    - **Font Optimization:** Use `font-display: swap` and ensure preconnect tags are correctly implemented in `Layout.astro`.
    - **Selective Hydration:** Verify `ContactForm` uses `client:visible` effectively and doesn't block initial rendering.
    - **Bundle Cleanup:** Audit `package.json` to ensure no unused dependencies (like `framer-motion` after removal) are being bundled.

## 5. Success Criteria
- PageSpeed Insights score improvement (specifically TBT and LCP).
- Significant reduction in the `_astro` bundled JS size.
- Smooth (60 FPS) animations even on mid-range mobile devices.
