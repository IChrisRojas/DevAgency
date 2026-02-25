# WebGL PC to App Morphing Design

## Objective
Update the `WebGLBackground.astro` particle animation in the DevAgency website to morph between a "PC" shape and an "App" (smartphone) shape, replacing the current "Sphere" (Brain) and "Cone" (Bulb) placeholders.

## Architecture & Components
- **Component**: `src/components/WebGLBackground.astro`
- **Current Tech**: Three.js (BufferGeometry, ShaderMaterial, Points, PostProcessing) + GSAP for scroll-triggered animation.
- **Approach**: Procedural generation of vertices (particles) using 3D primitives (Boxes).

## Data Flow & Generation
### Geometry 1: The PC
Instead of a simple sphere, the PC will be composed of two main regions:
1. **Screen**: A vertical/rectangular box shape (e.g., width 2.5, height 1.5, depth 0.1).
2. **Keyboard/Base**: A flat horizontal box shape attached to the bottom of the screen (e.g., width 2.5, height 0.1, depth 1.5).
Particles will be randomly sampled within the volume of these two regions to form the overall shape.

### Geometry 2: The App
A vertical, smartphone-like box shape (e.g., width 1.2, height 2.5, depth 0.2). Particles will be randomly sampled within this single volume.

### Equalization
To ensure the custom shader (which uses `mix(position, position2, uProgress)`) works correctly, both the PC vertex array and the App vertex array must be of the exact same length. We will calculate a fixed number of particles (e.g., 5000-8000) and generate random `(x, y, z)` coordinates within the defined bounds for both shapes.

## Shader & Animation Updates
- The GLSL shaders (Vertex and Fragment) will remain largely unchanged as they already handle the `uProgress` morphing, Perlin noise displacement, and explosion effects flawlessly.
- GSAP ScrollTrigger will continue to drive `uProgress` from 0 (PC) to 1 (App) across the page scroll.
- Colors will remain from the original palette (Violet, Neon Yellow, White) to fit the DevAgency aesthetic.

## Error Handling & Performance
- The number of particles will be kept reasonable to ensure it runs smoothly on mobile devices where `UnrealBloomPass` is disabled.
- Math operations for coordinate sampling will be done strictly during initialization to avoid blocking the render loop.