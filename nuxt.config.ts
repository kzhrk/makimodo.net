import { readdirSync } from 'node:fs'

const routes = Array(readdirSync('./posts').length).fill(0).map((_, i) => `/episode/${i + 1}`);

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: ['@nuxtjs/tailwindcss'],
  generate: {
    routes
  },
  vite: {
    plugins: [
      {
        name: "markdown-loader",
        transform(code, id) {
          if (id.slice(-3) === ".md") {
            // For .md files, get the raw content
            return `export default ${JSON.stringify(code)};`;
          }
        },
      },
    ]
  }
})