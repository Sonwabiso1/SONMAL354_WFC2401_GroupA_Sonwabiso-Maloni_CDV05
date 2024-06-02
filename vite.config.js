import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        agileboard: resolve(__dirname, 'portfolio-item-agileboard/index.html'),
        bookconnect: resolve(__dirname, 'portfolio-item-bookconnect/index.html'),
        cachebank: resolve(__dirname, 'portfolio-item-cachebank/index.html'),
      },
    },
  },
});
