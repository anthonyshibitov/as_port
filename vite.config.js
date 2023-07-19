import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // webtoys: resolve(__dirname, 'webtoys/'),
        webaudio: resolve(__dirname, 'webtoys/webaudio/index.html'),
        "3dcoloring": resolve(__dirname, 'webtoys/3dcoloring/index.html'),
      },
    },
  },
})