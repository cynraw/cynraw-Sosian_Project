import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // Ensures Vite looks for index.html in the correct place
  build: {
    outDir: 'dist', // Output folder for the build
    emptyOutDir: true, // Clears old builds
  },
  server: {
    port: 5173, // You can change this if needed
  },
});
