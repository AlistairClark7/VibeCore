import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  appType: 'custom',
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
  },
  base: '/app/',
  build: {
    outDir: '../wwwroot/app',
    emptyOutDir: true,
    manifest: '.vite/manifest.json',
    rollupOptions: {
      input: './src/main.jsx',
    },
  },
}));
