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

## Nuxt Content

My Notes section where I write things down for myself to learn and remember uses the Nuxt content module and markdown files. I first had to install the content module.

```
yarn add --dev @nuxt/content
```

Then I add it to `nuxt.config.ts` and the modules section.

```ts[nuxt.config.ts]
export default defineNuxtConfig({
  modules: ["@nuxt/content"],
});
```

The content directory needs to be at the root of the project. I added the new content directory and copied all my markdown files to the new directory.
