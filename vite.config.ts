import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      formats: ["es"],
      fileName: 'morromapper-components'
    },
    minify: false,
    sourcemap: true
  },
  sourcemap: true
});
