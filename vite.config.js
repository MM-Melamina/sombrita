import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mallaRaschel: resolve(__dirname, 'malla-raschel.html'),
        lonas: resolve(__dirname, 'lonas.html'),
        plasticoNegro: resolve(__dirname, 'plastico-negro.html')
      }
    }
  }
});
