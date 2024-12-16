import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate", // Auto-updates service workers
      manifest: {
        name: "Mood Mingle",
        short_name: "MoodMingle",
        description: "Track and analyze your moods effortlessly!",
        theme_color: "#800080",
        background_color: "#eae6f8",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/icon-192.png", // Path remains the same
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-512.png", // Path remains the same
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https?.*/, // Cache HTTP requests
            handler: "NetworkFirst", // Try the network first, fallback to cache
            options: {
              cacheName: "http-cache",
            },
          },
        ],
      },
    }),
  ],
  build: {
    outDir: "dist", // Use 'dist' for output directory, separate from 'public'
    chunkSizeWarningLimit: 1000, // Optional: to avoid chunk size warnings
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Customize chunking logic
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});
