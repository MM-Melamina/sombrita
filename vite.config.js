import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mallaRaschel: resolve(__dirname, 'malla-raschel.html'),
        mallaMonofilamento: resolve(__dirname, 'malla-monofilamento.html'),
        lonaArquitectonica: resolve(__dirname, 'lona-arquitectonica.html'),
        lonaToldos: resolve(__dirname, 'lona-toldos.html'),
        lonaTransportistas: resolve(__dirname, 'lona-transportistas.html'),
        plasticoNegro: resolve(__dirname, 'plastico-negro.html')
      }
    }
  }
});
