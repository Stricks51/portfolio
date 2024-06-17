import { build } from "vite";
import { resolve } from 'path';

// vite.config.js
export default {
    // config options
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                projects: resolve(__dirname, 'projects/index.html')
            }
        }
    }
  }