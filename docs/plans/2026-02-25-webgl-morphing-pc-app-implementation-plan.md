# WebGL PC to App Morphing Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Actualizar la animación de partículas en Three.js para que transicione desde la forma de un PC (pantalla + teclado) hacia la forma de un Smartphone (App).

**Architecture:** Generaremos las partículas (vértices) de manera procedimental distribuyéndolas aleatoriamente dentro de primitivas 3D (cajas). Para el PC usaremos dos volúmenes rectangulares y para el móvil un solo volumen alargado. Luego pasaremos estos arreglos de vértices al `ShaderMaterial` existente.

**Tech Stack:** Astro, HTML Canvas, Three.js, GSAP.

---

### Task 1: Update Particle Generation Logic

**Files:**
- Modify: `src/components/WebGLBackground.astro`

**Step 1: Write the procedural generation logic**
Reemplazar la lógica de `SphereGeometry` y `ConeGeometry` con funciones que generen vértices dentro de volúmenes de cajas delimitadoras.

```javascript
    // Number of particles to use
    const particleCount = 8000;

    const positions1 = new Float32Array(particleCount * 3); // PC
    const positions2 = new Float32Array(particleCount * 3); // App
    
    // Function to get a random point in a box
    function randomInBox(w, h, d, offsetX = 0, offsetY = 0, offsetZ = 0) {
        return [
            (Math.random() - 0.5) * w + offsetX,
            (Math.random() - 0.5) * h + offsetY,
            (Math.random() - 0.5) * d + offsetZ
        ];
    }

    for (let i = 0; i < particleCount; i++) {
        // --- Generate PC (Geometry 1) ---
        // 70% chance to be in the monitor, 30% chance to be in the keyboard base
        let px, py, pz;
        if (Math.random() > 0.3) {
            // Monitor screen: width 3.0, height 2.0, depth 0.2
            // Shifted up slightly
            [px, py, pz] = randomInBox(3.0, 2.0, 0.2, 0, 0.5, 0);
        } else {
            // Keyboard base: width 3.0, height 0.1, depth 1.5
            // Shifted down and forward
            [px, py, pz] = randomInBox(3.0, 0.1, 1.5, 0, -0.6, 0.5);
        }
        
        positions1[i * 3] = px;
        positions1[i * 3 + 1] = py;
        positions1[i * 3 + 2] = pz;

        // --- Generate App (Geometry 2) ---
        // Smartphone shape: width 1.2, height 2.5, depth 0.1
        let [ax, ay, az] = randomInBox(1.2, 2.5, 0.1);
        positions2[i * 3] = ax;
        positions2[i * 3 + 1] = ay;
        positions2[i * 3 + 2] = az;
    }
```

**Step 2: Remove old geometry padding logic**
Eliminar las líneas donde se extraían vértices de `geometry1` (esfera) y `geometry2` (cono), así como el bucle `while` que rellenaba los arrays. También remover las importaciones de `SphereGeometry` y `ConeGeometry` de Three.js si ya no se usan.

**Step 3: Keep Color and Offset generation intact**
La lógica que genera los arreglos de `colors` y `randomOffsets` se mantiene igual, pero ahora iterará sobre la nueva variable `particleCount`.

**Step 4: Update BufferGeometry attributes**
```javascript
    const particlesGeometry = new BufferGeometry();
    particlesGeometry.setAttribute('position', new BufferAttribute(positions1, 3));
    particlesGeometry.setAttribute('position2', new BufferAttribute(positions2, 3));
    particlesGeometry.setAttribute('customColor', new BufferAttribute(colors, 3));
    particlesGeometry.setAttribute('randomOffset', new BufferAttribute(randomOffsets, 1));
```

**Step 5: Verify Changes locally**
Ejecutar `npm run dev` y comprobar en el navegador que al recargar, la animación inicial muestra una figura con forma de PC (un rectángulo vertical y uno horizontal abajo), y que al bajar con el scroll las partículas se reacomodan para formar un rectángulo vertical similar a un teléfono. No realizaremos commit según tus indicaciones.
