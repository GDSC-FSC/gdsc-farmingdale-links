import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      include: ['./src/**/*.tsx', './src/**/*.ts'],
      exclude: ['node_modules/**', './src/**/*.d.ts'],
    }),
    VitePWA({
      workbox: {
        cleanupOutdatedCaches: true,
        globPatterns: ['**/*'],
      },
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ['**/*'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: '../server/dist',
    emptyOutDir: true
  },
  server: {
    proxy: {
      '/events': {
        target: 'http://localhost:3000'
      }
    }
  }
})
