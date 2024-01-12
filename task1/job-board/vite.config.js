import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api/v1': {
        target: 'http://127.0.0.1:8080',
        // target: 'https://wondrous-custard-e7a0f4.netlify.app',
        changeOrigin: true
      }
    }
  }
})