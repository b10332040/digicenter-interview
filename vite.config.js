import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '/pages': '/src/pages',
      '/components': '/src/components',
      '/styles': '/src/styles',
      '/data': '/src/data',
      '/utils': '/src/utils'
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  }
})
