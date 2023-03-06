---
title: Migrating Nuxt2 to Nuxt3
description: Migrating my personal website from using Nuxt2 to Nuxt3
tags: [Nuxt2, Nuxt 3 Migration, Nuxt3]
---

## Migrating my personal website to Nuxt3

Time for an upgrade! Nuxt3 has been [stable since November 2022](https://nuxt.com/v3#announcing-nuxt-30-stable) and I figured a good way to learn the differences between Nuxt 2 and Nuxt3 would be to migrate my personal website. This was a bit daunting really so I followed this brilliant guide from [Debbie O'Brian](https://debbie.codes/blog/migrating-nuxt2-nuxt3).

## Getting started

I checked out a new branch and then followed Debbie's suggestion to copy all the old files into a new folder called `__nuxt2`. I then created a brand new nuxt3 app by running:

```
npx nuxi init nuxt-app
```

I then moved all the files it gives you for the minimal starting point out into the root level and we're ready to go!

## Checking the new app works

After creating the new Nuxt 3 app we need to check everything is working as it should so I ran:

```
yarn install
```

and

```
yarn dev
```

Then you can go in and remove the Nuxt Default component in the `app.vue` file and add a new heading to check that all is working well.

## Pages

In Nuxt 3 projects you need to create your own `pages` directory at the root level and add an `index.vue` file as well as any other pages you will be using. In addition to `index.vue` I also created a page called `projects.vue`. My site only consists of these two pages along with the content module section (blog) I call Notes. But that part will be configured in a different way.

I then started moving my content for these two pages over to the new Nuxt 3 pages.

## Components

In my Nuxt 2 project my components where in `assets/components` but in Nuxt 3 the components directory needs to be at the root level, same level as the pages directory. I created a new `components` directory and copied all my old components over into this new directory.

## Images

In my Nuxt 2 project I kept the images in `assets/images` but after reading the [docs](https://nuxt.com/docs/getting-started/assets#assets) I decided that in this new project I will keep them inside the `public` directory. This means I can reference any images in the below way inside my components.

```js
<img src="/images/kajsa.jpg" />
```

## Styles

Next up is making the site look good with our styles. I grabbed the `syles` directory containing all my scss files from the Nuxt 2 project and pasted that into a new `assets` directory at the root level in the Nuxt 3 project. I then had to install `sass` and `sass-loader`.

```shell
yarn add --dev sass sass-loader
```

Once sass has installed I added the paths to the style files in the nuxt config.

```ts[nuxt.config.ts]
export default defineNuxtConfig({
  ...

  css: [
    // SCSS file in the project
    "~/assets/styles/main.scss",
  ],
})
```

I've only added one style sheet's path as that file imports all the other style sheets I use for my website.

## Google fonts

I'm using the Nuxt Google-Fonts module for my website and I had a `fonts` directory with a few font files in my Nuxt 2 project. I moved the font directory to the new `assets` directory and installed the google-fonts module (make sure it installs v.3.0.0 or later) by running:

```shell
yarn add @nuxtjs/google-fonts
```

I also added the module to `nuxt.config.ts`:

```ts[nuxt.config.ts]
export default defineNuxtConfig({
  modules: ["@nuxt/google-fonts"],
});
```

Once installed I added my previous google-fonts module options to `nuxt.config.ts`.

```ts[nuxt.config.ts]
export default defineNuxtConfig({
  ...

  googleFonts: {
    families: {
      Lato: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      'Work Sans': [100, 200, 300, 400, 700, 900],
      Poppins: [400, 700, 800, 900],
    },
    download: true,
  },
})
```

## Layouts

In Nuxt 3 the `layouts` directory also needs to be moved to the root level. But since I'm only using one layout on my website I decided to scrap the layouts directory and move my layout template code to the `app.vue` file instead.

One thing to note is that in my Nuxt 2 project I used the `<Nuxt />` tag to render the Nuxt content but this is now called `<NuxtPage />` in Nuxt 3.

## Nuxt Content

My Notes section where I write things down for myself to learn and remember uses the Nuxt content module and markdown files. I first had to install the content module.

```shell
yarn add --dev @nuxt/content
```

Then I add it to `nuxt.config.ts` and the modules section.

```ts[nuxt.config.ts]
export default defineNuxtConfig({
  modules: ["@nuxt/content"],
});
```

The content directory needs to be at the root of the project. I added the new content directory and copied all my markdown files to the new directory. The content module in Nuxt 3 works a little different to how I used it in Nuxt 2.

This is how I was getting the content in Nuxt 2:

```ts
<script>
export default {
  async asyncData({ $content, params }) {
    const posts = await $content('posts')
      .only(['title', 'description', 'slug'
      , 'updatedAt'])
      .sortBy('createdAt', 'desc')
      .fetch();
    return { posts };
  },
  methods: {
    ...
  },
};
</script>
```

In Nuxt 3 I'll be using the setup and the Composition API in the script tag as well as auto-imported `queryContent` method.

It will look like this:

```ts[index.vue]
<script lang="ts" setup>
const { data: notes } = await useAsyncData("posts", () =>
  queryContent("notes").find()
);

...

</script>
```

## Nuxt config

In Nuxt 3 we need to use `defineNuxtConfig` in the config. Another difference is that the `head` section needs to be wrapped by the `app` property.

In Nuxt 2 my config looked like this:

```js
export default {
  // config options go in here
  head: {
    // Global page headers go in here
  },
};
```

And in Nuxt 3 it looks like this:

```ts
export default defineNuxtConfig({
  // config options go in here
  app: {
    head: {
      // Global page headers go in here
    },
  },
});
```
