import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    // Date réelle du build, affichée en footer (cf. Footer.jsx) — pas une valeur en dur
    __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
  },
})
