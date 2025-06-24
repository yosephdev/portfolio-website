import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: 5173,
      host: true,
      proxy: {
        '/api/subscribe': {
          target: 'https://api.beehiiv.com',
          changeOrigin: true,
          rewrite: (path) => '/v2/publications/812c37bf-5f3d-46c3-8b13-bc4ab8b18043/subscriptions',
          configure: (proxy, options) => {
            proxy.on('proxyReq', (proxyReq, req, res) => {
              // Add the API key to the request
              proxyReq.setHeader('Authorization', 'Bearer REDACTED_ROTATE_BEEHIIV_KEY')
              proxyReq.setHeader('Content-Type', 'application/json')
            })
          }
        }
      }
    }
})
