import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Указывает Vite слушать на всех сетевых интерфейсах
    port: 5173, // Указывает порт, который вы хотите использовать
  },
})
