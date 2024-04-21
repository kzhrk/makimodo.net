import { readdirSync } from 'node:fs'

const routes = Array(readdirSync('./posts').length).fill(0).map((_, i) => `/episode/${i + 1}`);

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja'
      },
      script: [
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KJ747KN');`,
        },
        {
          type: 'text/javascript',
          async: true,
          src: 'https://platform.twitter.com/widgets.js',
          tagPosition: 'bodyClose'
        }
      ]
    },
  },
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