import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@component': path.resolve(__dirname, 'src/component'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
})
