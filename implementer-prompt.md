# Implementer Subagent Prompt

You are an expert software engineer implementing a specific task from a technical plan.

## Your Task

Task: Task 1: Geometry Normalization and Buffer Fix
Goal: Fixes the "white orb" visual bug by correctly normalizing GLB geometries and improves model definition by increasing particle density to 15,000 points with balanced bloom and size.

### Files to Modify
- `src/components/WebGLBackground.astro`

### Step 1: Rewrite the GLTF loading logic to include proper geometry normalization

```javascript
    const loader = new GLTFLoader();
    
    Promise.all([
        new Promise<any>(resolve => loader.load('/models/lightbulb.glb', resolve)),
        new Promise<any>(resolve => loader.load('/models/brain.glb', resolve))
    ]).then(([bulbGLTF, brainGLTF]) => {
        
        const getMesh = (gltf: any) => {
            let mesh: any = null;
            gltf.scene.traverse((child: any) => {
                if (child.isMesh && !mesh) mesh = child;
            });
            return mesh;
        };

        const bulbMesh = getMesh(bulbGLTF);
        const brainMesh = getMesh(brainGLTF);

        if (!bulbMesh || !brainMesh) return;

        // CRITICAL: Normalizar geometrías para que no colapsen en el centro
        const normalizeGeometry = (mesh: any, targetSize: number) => {
            const geom = mesh.geometry.clone();
            mesh.updateMatrixWorld(); // Asegurar matrices actualizadas
            geom.applyMatrix4(mesh.matrixWorld); // Congelar posición y escala del GLB
            
            geom.computeBoundingBox();
            const box = geom.boundingBox;
            const center = new Vector3();
            box.getCenter(center);
            
            // Centrar
            geom.translate(-center.x, -center.y, -center.z);
            
            // Escalar a tamaño estándar
            const size = new Vector3();
            box.getSize(size);
            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = targetSize / maxDim;
            geom.scale(scale, scale, scale);
            
            return geom;
        };

        const bulbGeom = normalizeGeometry(bulbMesh, 4.0);
        const brainGeom = normalizeGeometry(brainMesh, 4.0);

        // Crear samplers con las geometrías ya normalizadas
        // Usamos un objeto dummy para el sampler
        const bulbSampler = new MeshSurfaceSampler(new Points(bulbGeom)).build();
        const brainSampler = new MeshSurfaceSampler(new Points(brainGeom)).build();

        const _position = new Vector3();
        const _normal = new Vector3();
        
        const colorCenter = new Color(0xffcc00); // Amarillo cálido
        const colorEdge = new Color(0x8b5cf6);   // Púrpura
        const colorHighlight = new Color(0xffffff);
        const tempColor = new Color();

        // Obtener los arreglos de atributos actuales
        const pos1Array = particlesGeometry.attributes.position.array as Float32Array;
        const pos2Array = particlesGeometry.attributes.position2.array as Float32Array;
        const colorArray = particlesGeometry.attributes.customColor.array as Float32Array;

        for (let i = 0; i < particleCount; i++) {
            // Muestreo Bombilla
            bulbSampler.sample(_position, _normal);
            pos1Array[i * 3] = _position.x;
            pos1Array[i * 3 + 1] = _position.y;
            pos1Array[i * 3 + 2] = _position.z;

            // Muestreo Cerebro
            brainSampler.sample(_position, _normal);
            pos2Array[i * 3] = _position.x;
            pos2Array[i * 3 + 1] = _position.y;
            pos2Array[i * 3 + 2] = _position.z;

            // Gradiente espacial basado en distancia radial
            const dist = Math.sqrt(_position.x * _position.x + _position.z * _position.z);
            tempColor.copy(colorCenter).lerp(colorEdge, Math.min(dist / 2.0, 1.0));
            
            if (Math.random() > 0.9) tempColor.lerp(colorHighlight, 0.5);

            colorArray[i * 3] = tempColor.r;
            colorArray[i * 3 + 1] = tempColor.g;
            colorArray[i * 3 + 2] = tempColor.b;
        }

        // Indicar a Three.js que los buffers han cambiado
        particlesGeometry.attributes.position.needsUpdate = true;
        particlesGeometry.attributes.position2.needsUpdate = true;
        particlesGeometry.attributes.customColor.needsUpdate = true;
        
    });
```

## Guidelines
- Follow TDD: Write/update tests if applicable (visual verification for this task).
- Run `npm run build` to ensure no regressions.
- Commit frequently with clear messages.
- Self-review your work before handing back.
