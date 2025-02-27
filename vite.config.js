import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  plugins: [
    tailwindcss(),
    viteStaticCopy({
      targets: [
        {
          src: 'animatedConversation.js',
          dest: ''
        },
        {
          src: 'CNAME',
          dest: ''
        },
      ]
    })
  ],
  server: {
    allowedHosts: ['.ngrok-free.app'],
  }
})
