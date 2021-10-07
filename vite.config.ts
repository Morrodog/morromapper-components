import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import cjs from '@rollup/plugin-commonjs'

export default defineConfig({
  plugins: [
    vue(),
    cjs({
      include: "node_modules/leaflet/dist/leaflet-src.js"
    })
  ],
  build: {
    rollupOptions: {
      external: 'vue',
    },
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      formats: ["es"],
      fileName: 'morromapper-components',
    },
    sourcemap: true
  },
  sourcemap: true
});
