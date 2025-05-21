import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
   
    allowedHosts: [
      '2c8d-2409-40e2-1b-5f8d-3847-42b8-63ae-e7fa.ngrok-free.app'  // paste your current Ngrok domain here
    ]
  }
})