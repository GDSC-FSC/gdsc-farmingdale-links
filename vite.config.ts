import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: [
          '**/*.{js,css,html,svg,png}',
        ],
      },
      devOptions: {
        enabled: true,
        type: 'module'
      }
    })
  ],
  build: {
    rollupOptions: {
      external: ['puppeteer'],
    },
  },
})
