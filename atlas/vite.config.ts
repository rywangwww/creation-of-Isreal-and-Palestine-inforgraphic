import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Public path the site is served from. '/' locally; the GitHub Pages workflow sets
  // BASE_PATH to '/<repository-name>/' (see .github/workflows/deploy.yml).
  base: process.env.BASE_PATH ?? '/',
  // 5173 is Vite's default and is often taken by other projects; use a fixed, uncommon port instead.
  server: { port: 4180, strictPort: true },
  preview: { port: 4180, strictPort: true },
})
