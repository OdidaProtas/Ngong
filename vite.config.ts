import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: [
        "favicon.png",
        "robots.txt",
        "logo_transparent.png"
      ],
      manifest: {
        name: "Tokea",
        short_name: "Your potential, our passion",
        description: "We help you stand and reach out to a wider audience",
        theme_color: "#ffffff",
        icons: [
          {
            src: "logo_transparent.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "logo_transparent.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "logo_transparent.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
