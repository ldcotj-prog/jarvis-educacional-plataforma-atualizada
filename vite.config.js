import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    allowedHosts: [
      '5174-iglpv69x2r5uanpmbhv4j-f10dba02.manusvm.computer',
      '5173-i34kfjgrl92x1641pypkf-f10dba02.manusvm.computer',
      '5173-if93zf23b62xxxkuwd3ma-f10dba02.manusvm.computer',
      '3000-ilr3dhdlonfj5hj79yv6h-f10dba02.manusvm.computer',
      '8080-ilr3dhdlonfj5hj79yv6h-f10dba02.manusvm.computer',
      'localhost',
      '127.0.0.1'
    ]
  }
})
