import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "node:url";
// https://vitejs.dev/config/


export default defineConfig({
  plugins: [vue()],
  base: '/aec-web/',
  resolve:{
    alias:{
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/components/pages', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@images': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
      '@svg': fileURLToPath(new URL('./src/assets/svg', import.meta.url)),
      "sub-pages": fileURLToPath(new URL('./src/components/sub-pages', import.meta.url)),
      "~bootstrap": fileURLToPath( new URL("./node_modules/bootstrap", import.meta.url)),
        }
  }
})
