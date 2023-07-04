const API_BASE_URL = 'http://127.0.0.1:12450'

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api/chat': {
        target: API_BASE_URL.replace(/^http/, "ws"),
        ws: true
      },
      '/api': {
        target: API_BASE_URL
      },
      '/emoticons': {
        target: API_BASE_URL
      }
    }
  }
})
