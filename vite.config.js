import { resolve } from 'path'
import { defineConfig } from 'vite'

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main:  resolve(__dirname, 'index.html'),
        project: resolve(__dirname, 'projects.html'),
        contactus: resolve(__dirname, 'contactus.html'),
        // ...
        // List all files you want in your build
      }
    }
  }
})