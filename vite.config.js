import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        agileboard: resolve(__dirname, './portfolio-item-agileboard'),
        bookconnect: resolve(__dirname, './portfolio-item-bookconnect'),
        cachebank: resolve(__dirname, './portfolio-item-cachebank'),
      },
    },
  },
});
