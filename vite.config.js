import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { imagetools } from 'vite-imagetools'

const page = (path) => fileURLToPath(new URL(path, import.meta.url))

// /v2/<route> is a page of the v2 preview: answer it with v2's index.html.
// This is the same rule the production server uses (DEPLOY.md), so dev and preview behave like the live site.
const v2Routes = () => {
  const rewrite = (req, _res, next) => {
    const path = req.url.split('?')[0]
    if (/^\/v2(\/|$)/.test(path) && !/\.[a-z0-9]+$/i.test(path)) {
      req.url = '/v2/index.html' + req.url.slice(path.length)
    }
    next()
  }
  return {
    name: 'v2-routes',
    // block bodies on purpose: a function returned from these hooks would be run as a late middleware
    configureServer(server) {
      server.middlewares.use(rewrite)
    },
    configurePreviewServer(server) {
      server.middlewares.use(rewrite)
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), imagetools(), v2Routes()],
  build: {
    // one output: the folder that is copied to the server, holding the original site at / and the preview at /v2/
    outDir: 'hockeyendshunger.com',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: page('./index.html'),
        v2: page('./v2/index.html'),
      },
      output: {
        // React and the router are shared by both sites: one cached file instead of a chunk named after whatever module came first
        manualChunks: (id) => (id.includes('node_modules') ? 'vendor' : undefined),
      },
    },
  },
})
