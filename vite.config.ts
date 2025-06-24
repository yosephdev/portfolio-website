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
              proxyReq.setHeader('Authorization', 'Bearer aR3LJgQ52IZQL7e7sLhP4GCCGCl6g1RgP38g5Z8sWhcWi9rBO9dZdcCFFqy73BSU')
              proxyReq.setHeader('Content-Type', 'application/json')
            })
          }
        }
      }
    }
})
