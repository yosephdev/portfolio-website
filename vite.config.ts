import fs from 'fs/promises'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

function localMultiPageRoutes() {
  const landingPage = path.resolve(__dirname, 'public/index.html')
  const appPage = path.resolve(__dirname, 'app.html')

  return {
    name: 'local-multi-page-routes',
    configureServer(server: any) {
      server.middlewares.use(async (req: any, res: any, next: any) => {
        const url = req.url?.split('?')[0] ?? ''

        if (url === '/' || url === '/index.html') {
          const html = await fs.readFile(landingPage, 'utf-8')
          const transformed = await server.transformIndexHtml(url, html)
          res.setHeader('Content-Type', 'text/html')
          res.end(transformed)
          return
        }

        if (url === '/app' || url === '/app/' || url.startsWith('/app/')) {
          const html = await fs.readFile(appPage, 'utf-8')
          const transformed = await server.transformIndexHtml(url, html)
          res.setHeader('Content-Type', 'text/html')
          res.end(transformed)
          return
        }

        next()
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
      react(),
      nodePolyfills(),
      localMultiPageRoutes(),
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
