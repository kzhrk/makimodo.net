// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: ['@nuxtjs/tailwindcss'],
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