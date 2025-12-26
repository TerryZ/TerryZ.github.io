// @ts-check
import { defineConfig } from 'astro/config'

import vue from '@astrojs/vue'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark'
      },
      wrap: true
    }
  },
  integrations: [vue()],
  vite: {
    plugins: [tailwindcss()]
  }
})
