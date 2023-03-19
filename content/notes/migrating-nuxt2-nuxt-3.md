---
title: Migrating Nuxt 2 to Nuxt 3
description: Migrating my personal website from using Nuxt 2 to Nuxt 3
tags: [Nuxt 2, Nuxt 3 Migration, Nuxt 3]
date: 03.18.2023
---

## Migrating my personal website to Nuxt3

Time for an upgrade! Nuxt3 has been [stable since November 2022](https://nuxt.com/v3#announcing-nuxt-30-stable) and I figured a good way to learn the differences between Nuxt 2 and Nuxt3 would be to migrate my personal website. This was a bit daunting really so I followed this brilliant guide from [Debbie O'Brian](https://debbie.codes/blog/migrating-nuxt2-nuxt3).

## Getting started

I checked out a new branch and then followed Debbie's suggestion to copy all the old files into a new folder called `__nuxt2`. I then created a brand new nuxt3 app by running:

```shell
npx nuxi init nuxt-app
```

I then moved all the files it gives you for the minimal starting point out into the root level and we're ready to go!

## Checking the new app works

After creating the new Nuxt 3 app we need to check everything is working as it should so I ran:

```shell
yarn install
```

and

```shell
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

```ts
<img src="/images/kajsa.jpg" />
```

## Nuxt Content

I have a "Notes" section on my site where I write things down for myself as that's how I best learn new things. The page to generate the notes uses the Nuxt content module and markdown files. To add this to the new Nuxt 3 site I first had to install the content module.

```shell
yarn add --dev @nuxt/content
```

Then I add it to `nuxt.config.ts` and the modules section.

```ts[nuxt.config.ts]
export default defineNuxtConfig({
  modules: ["@nuxt/content"],
});
```

The content directory needs to be at the root of the project. I added the new content directory and copied all my markdown files to the new directory.

In the Nuxt 2 project each md file automatically got a `createdAt` and `updatedAt` date attached each file based on git history. However in Nuxt 3 we have to add a date parameter in the frontmatter manually instead. Fortunately I didn't have that many files to add this to and it will give you more control of the date since moving or updating the file in git won't change the date.

The template part of `pages/notes/index.vue` will look exactly the same as in the Nuxt 2 project. However the fetching of the content works a little different.

In the Nuxt 2 project this is how I fetched the content:

```ts[index.vue]
<script>
export default {
  async asyncData({ $content, params }) {
    const posts = await $content('posts')
      .only(['title', 'description', 'slug', 'updatedAt'])
      .sortBy('createdAt', 'desc')
      .fetch();
    return { posts };
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('en', options);
    },
  },
};
</script>
```

In Nuxt 3 I moved the `formateDate()` method to a composable. I'm using the script tag so no need for `export default{}`. Instead I'm using the `useAsyncData` [composable](https://nuxt.com/docs/api/composables/use-async-data). The `slug` has been swapped for `path` and `updatedAt` is now `date`. I'm excluding the `body` from the queried content since that's not displayed on this page. The [sort](https://content.nuxtjs.org/api/composables/query-content#sortoptions) method has also been updated in Nuxt 3. And `fetch()` is now `find()`.

```ts[index.vue]
<script lang="ts" setup>
const { data: notes } = await useAsyncData("posts", () =>
  queryContent("notes")
    .only(["title", "description", "_path", "date"])
    .without("body")
    .sort({ date: -1 })
    .find()
);
</script>
```

### Dynamic pages

In Nuxt 2 dynamic pages were prefixed with `_`. I called mine `_slug.vue`. In Nuxt 3 you have to use `[]` instead. I've gone for `[slug].vue`. In the pages directory I have a notes directory with two files. I have `index.vue` and `[slug].vue`.

In my Nuxt 2 project this is how the script tag looked like.

```ts[_slug.vue]
<script>

export default {
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch();
    console.log(post);
    return { post };
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('en', options);
    },
  },
};

</script>
```

In Nuxt 3 there are a few changes. I'm getting the current `path` by using `useRoute` for the dynamic page. I can then use that path to query the content and get the right content for the route.

```ts[[slug].vue]
<script setup>
const { path } = useRoute();
const { data: article } = await useAsyncData(path, () =>
  queryContent("notes").where({ _path: path }).findOne()
);
</script>
```

In the template tag the only difference from Nuxt 2 is that ` <nuxt-content :document="post" />` has been replaced by `<ContentRenderer :value="article" />`.

## Code block styling

The highlighting and code block styling in Nuxt 3 and Content 2 works differently than in Nuxt 2 and Content 1. Instead of having to add prism to our project Nuxt Content 2 comes with built in code highlighting that works really well. All you have to do is add the theme to the config.

```ts[nuxt.config.ts]
export default defineNuxtConfig({
  // all other config options...

  content: {
    highlight: {
      theme: 'dark-plus',
    },
  },
})
```

The other difference is that the file name provided in a code block is not automatically added. To display it you have to create your own [custom component](https://content.nuxtjs.org/api/components/prose#prosecode) in `components/content/ProseCode.vue`.

First I added the script tag with the props for the component.

```ts[ProseCode.vue]
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    code?: string;
    language?: string | null;
    filename?: string | null;
    highlights?: number[];
  }>(),
  { code: "", language: null, filename: null, highlights: undefined }
);
</script>
```

Then I modified the template section to add in the filename.

```html[ProseCode.vue]
<template>
  <div class="code-wrapper">
    <span v-if="filename" class="filename">
      {{ filename }}
    </span>
    <slot />
  </div>
</template>
```

Last, I added some styling for the component.

```html[ProseCode.vue]
<style scoped>
.code-wrapper {
  position: relative;
}

.filename {
  position: absolute;
  top: 0;
  right: 0.5em;
  padding: 0.25em 0.5em;
  font-size: 14px;
  color: #b5b1b1;
}
</style>
```

The result is a highlighted code block with the filename displayed in the top right corner!
