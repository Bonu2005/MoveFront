import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import path from "path"

export default defineConfig({
  plugins: [react(), tailwindcss(), VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: false
      },
      manifest: {
        name: "Mooovies",
        short_name: "Moo",
        description: "all movies in the world",
        
        theme_color: "#ffffff",
        icons: [
          {
            src: "/src/assets/LOGOTYPE-BILETICK.svg",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/src/assets/LOGOTYPE-BILETICK.svg",
            sizes: "512x512",
            type: "image/svg"
          }
        ]
      }
    })],
  resolve: {
      alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  
})
