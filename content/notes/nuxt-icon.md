---
title: Icons in Nuxt 3
description: Using Nuxt Icon in a Nuxt 3 project
date: 03.26.2023
---

## Adding Nuxt Image Module

Icons make everything better and the easiest way to work with icons in a Nuxt project is to use [Nuxt Icon](https://github.com/nuxt-modules/icon). Start by installing the module.

```shell
yarn add --dev nuxt-icon
```

Then add the module to the Nuxt config.

```ts[nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['nuxt-icon']
})
```

Now you're ready to roll! Get some nice looking icons from [icones.js.org](https://icones.js.org/). And use the icons in your vue templates with an `<Icon />` tag and set the name to the icon you want to use. You can set the size on each icon or you can define a default size in an app config. This is not the `nuxt.config.ts`file. Create a new `app.config.ts` if it doesn't already exist.

```ts
<Icon name="material-symbols:mail-outline" size="18" />
```

```ts[app.config.ts]
export default defineAppConfig({
  nuxtIcon: {
    size: '18px',
    class: 'icon',
    aliases: {
      'email': 'material-symbols:mail-outline',
    }
  }
})
```

With this config you can use the icon like this:

```ts
<Icon name="email" />
```
