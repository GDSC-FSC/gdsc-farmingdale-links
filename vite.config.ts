import path from 'path'
import { loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import million from 'million/compiler';
import { VitePWA } from 'vite-plugin-pwa'
import { URL, fileURLToPath } from "node:url";
import eslint from 'vite-plugin-eslint';
import { defineProject } from "vitest/config";

const publicEnvVars = [
  "APP_ENV",
  "APP_NAME",
  "APP_ORIGIN",
  "GOOGLE_CLOUD_PROJECT",
  "FIREBASE_APP_ID",
  "FIREBASE_API_KEY",
  "FIREBASE_AUTH_DOMAIN",
  "GA_MEASUREMENT_ID",
];


// https://vitejs.dev/config/
export default defineProject(async ({ mode }) => {
  const envDir = fileURLToPath(new URL("..", import.meta.url));
  const env = loadEnv(mode, envDir, "");
  publicEnvVars.forEach((key) => {
    if (!env[key]) throw new Error(`Missing environment variable: ${key}`);
    process.env[`VITE_${key}`] = env[key];
  });
  return {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            firebase: ["firebase/analytics", "firebase/app", "firebase/auth"],
            react: ["react", "react-dom", "react-router-dom"],
          },
        },
      },
    },
  plugins: [
    million.vite({
      auto: true,
    }),
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    eslint({
      include: ['./src/**/*.tsx', './src/**/*.ts', './server/**/*.ts'],
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
      '@': path.resolve(__dirname, './'),
    }
  }}
})
