// import react from '@vitejs/plugin-react'
// import { defineConfig } from 'vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: 'build',
//     emptyOutDir: true
//   }
// })





import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],

  build: {
    outDir: "build"
  },

  input: {
    home: resolve(import.meta.dirname, "index.html"),
    about: resolve(import.meta.dirname, "a-propos/index.html"),
    activities: resolve(import.meta.dirname, "activities/index.html"),
    gallery: resolve(import.meta.dirname, "galerie/index.html"),
    contact: resolve(import.meta.dirname, "contact/index.html")
  }
});
