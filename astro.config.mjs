import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: true
      }
    }
  },
  // Use compile-time image optimization for static builds
  build: {
    assets: '_astro'
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react()]
});