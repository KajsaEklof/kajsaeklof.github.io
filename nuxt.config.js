export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Kajsa Eklöf's personal portfolio site",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/kajsaekloflogo.png" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    "~/assets/styles/main.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/device",
    "@nuxtjs/fontawesome",
    "@nuxtjs/google-fonts",
  ],

  router: {
    // scrollBehavior: async (to, from, savedPosition) => {
    //   if (savedPosition) {
    //     return savedPosition;
    //   }
    //   const findEl = async (hash, x) => {
    //     return (
    //       document.querySelector(hash) ||
    //       new Promise((resolve, reject) => {
    //         if (x > 50) {
    //           return resolve();
    //         }
    //         setTimeout(() => {
    //           resolve(findEl(hash, ++x || 1));
    //         }, 100);
    //       })
    //     );
    //   };
    //   if (to.hash) {
    //     let el = await findEl(to.hash);
    //     if ("scrollBehavior" in document.documentElement.style) {
    //       return window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
    //     } else {
    //       return window.scrollTo(0, el.offsetTop);
    //     }
    //   }
    //   return { x: 0, y: 0 };
    // },
  },

  fontawsome: {
    icons: {},
    autoAddCss: false,
  },
  googleFonts: {
    families: {
      Lato: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      "Work+Sans": [100, 200, 300, 400, 700, 900],
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content"],

  content: {
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-material-oceanic.css",
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      vue: {
        transformAssetUrls: {
          audio: "src",
        },
      },
    },
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      });
    },
  },
};
