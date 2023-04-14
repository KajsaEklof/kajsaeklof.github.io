// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Kajsa Eklöf's personal website",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Kajsa Eklof, front-end web developer and information architect." },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "favicon.ico" }],

    },
  },
  modules: ['@nuxt/content', '@nuxtjs/google-fonts', 'nuxt-icon', '@vueuse/nuxt'],
  css: [
    // SCSS file in the project
    "~/assets/styles/main.scss",
  ],
  googleFonts: {
    families: {
      Lato: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      'Work Sans': [100, 200, 300, 400, 700, 900],
      Poppins: [400, 700, 800, 900],
    },
    download: true,
  },
  content: {
    highlight: {
      theme: 'dark-plus',
    },
  },
})
