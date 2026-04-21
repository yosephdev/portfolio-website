import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
      react(),
      nodePolyfills(),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // The React app is served from /app — root (/) is the static landing page
    build: {
      rollupOptions: {
        input: {
          app: path.resolve(__dirname, 'app.html'),
        },
      },
    },
    server: {
      port: 5173,
      host: true
    }
})
