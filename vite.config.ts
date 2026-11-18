import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // GitHub Pages project site: https://localhackerscommunity.github.io/lhc-web/
  base: '/lhc-web/',
  plugins: [vue()],
})
