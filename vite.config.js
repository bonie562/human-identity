import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.mkv"],
  build: {
    rollupOptions: {
      output: {
        // Split code into chunks for better caching
        manualChunks: {
          'vendor': ['react', 'react-dom', 'React-router-dom'],
        },
      },
    },
    // Optimize image assets
    assetsInlineLimit: 4096,
    minify: 'terser',
  },
});
