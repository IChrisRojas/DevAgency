# Diseño: Mejora de Contraste y Realce de UI

## Resumen
Mejorar la jerarquía visual y la legibilidad de la aplicación mediante la creación de bloques de contraste definidos, especialmente en las secciones de cierre (Contacto y Footer), y aumentando el brillo de los bordes de los componentes interactivos.

## Objetivos
- Eliminar la sensación de "elementos flotando en el vacío" en el Footer.
- Crear una transición fluida pero definida entre el contenido dinámico (Hero/Servicios) y el contenido estático de cierre.
- Mejorar el recorte visual de las tarjetas de servicios y portafolio sobre el fondo animado WebGL.

## Arquitectura de Diseño

### 1. Secciones de Cierre (Footer)
- **Fondo:** Cambiar de transparente a un fondo sólido casi negro (`#020202`) o `bg-slate-950/90` con `backdrop-blur-xl`.
- **Borde:** Añadir un separador superior sutil `border-t border-white/10`.
- **Tipografía:** Aumentar el contraste del texto secundario de `text-slate-400` a `text-slate-300`. Los enlaces en hover usarán `text-dev-accent` con un brillo sutil.

### 2. Sección de Contacto (Transición)
- **Fondo:** Aplicar un degradado lineal (`linear-gradient`) que vaya de `transparent` en la parte superior a `#020202` en la base.
- **Propósito:** Actuar como puente visual entre las animaciones WebGL y la base sólida del footer.

### 3. Componentes de Tarjeta (Servicios y Portafolio)
- **Bordes:** Aumentar el brillo de los bordes de `border-slate-800` a `border-white/15`.
- **Efectos:** Añadir una sombra interior leve y mejorar el estado `hover` para que el brillo del borde sea más pronunciado (`border-dev-accent/40`).

## Impacto en la Experiencia de Usuario
- **Navegación:** Una base sólida ayuda al usuario a identificar visualmente el final del scroll.
- **Legibilidad:** El aumento de contraste en el texto del footer facilita la lectura de enlaces de contacto y redes sociales.
- **Estética:** El sitio mantiene su apariencia "Premium/Dark" pero se siente más estructurado y profesional.
