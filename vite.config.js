import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Since your repository is named "Manav-Darji.github.io" but your username is "Manavdarji2",
  // GitHub Pages treats it as a Project Site and hosts it at /Manav-Darji.github.io/.
  base: '/Manav-Darji.github.io/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  }
})
