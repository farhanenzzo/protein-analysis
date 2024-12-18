import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/protein-analysis/",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
