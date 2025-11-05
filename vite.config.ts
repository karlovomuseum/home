import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { lucideIconFallback } from './vite-plugin-lucide-fallback'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    lucideIconFallback({
      fallbackMap: {
        'Template': 'Layout',
        'FileEdit': 'Edit',
        'FileEdit2': 'Edit',
        'Infinity': 'RotateCw',
        'Sparkles': 'Sparkle',
        'CircleParking': 'PartyPopper',
      },
      defaultFallback: 'Circle',
      silent: false, // Show warning logs
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
