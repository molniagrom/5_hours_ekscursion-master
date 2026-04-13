import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const githubPagesBase =
  process.env.NODE_ENV === 'production' ? '/5_hours_ekscursion-master/' : '/'

export default defineConfig({
  base: githubPagesBase,
  plugins: [react()],
})
