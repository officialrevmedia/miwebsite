import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Where the site is served from.
//   npm run build         -> GitHub Pages project URL (/miwebsite/)
//   npm run build:domain  -> custom domain root (https://www.muraqabah.ca/)
// Override at any time with VITE_BASE, for example: VITE_BASE=/ npm run build
const base = process.env.VITE_BASE || '/miwebsite/'

export default defineConfig({
  plugins: [react()],
  base,
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          gsap: ['gsap'],
        },
      },
    },
  },
})
