import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Must be '/' for a truthy User Site (username.github.io).
  // If your repository is named "Manav-Darji.github.io" but your username is "Manavdarji2",
  // GitHub Pages treats it as a Project Site and hosts it at /Manav-Darji.github.io/.
  // If you see 404s after this, change base to: process.env.NODE_ENV === 'production' ? '/Manav-Darji.github.io/' : '/'
  base: '/',
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
