---
title: Let's build a project
description: Starting a new project and scaffolding a create-nuxt app.
---

## An app for the dogs and their guardians

I am obsessed with my dog Merlin so why not build a project that can be useful when you have a dog. The idea is to build an app where you can have a profile and log things for your dog. Like when they had a vaccination, starting a new type of food or supplement. If they start a new behaviour and you want to track it. It can be anything you want.

Maybe like an advanced note app specific for doggos.

### Tech

So what will I be using to build this. Initially I'm planning on using Nuxt.js, Pinia, Supabase and Chakra UI. Mostly because I want to learn them all a bit better.

### Create Nuxt App

Lets go! Because we will use Nuxt we can use Nuxt create-app. [Documentation on setting up a Nuxt project](https://nuxtjs.org/docs/get-started/installation).

```shell
~/projects » yarn create nuxt-app <project-name>
```

Nuxt will present a few options to set up your project. This is what I selected.

```shell
? Project name: dog-app
? Programming language: TypeScript
? Package manager: Yarn
? UI framework: Chakra UI
? Nuxt.js modules: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Linting tools: ESLint, Prettier
? Testing framework: None
? Rendering mode: Single Page App
? Deployment target: Static (Static/Jamstack hosting)
? Development tools: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Continuous integration: None
? Version control system: Git
```

Once the project has been set up we want to cd into the directory

```shell
~/projects » cd <project-name>
```

Now let's try running `yarn dev` to make sure everything starts up ok. At this point I usually get a node error as we need to be using node version 16. `Error: error:0308010C:digital envelope routines::unsupported`. It's fixed by running `nvm use 16`. If you run this you should see a message saying `Now using node v16.14.0 (npm v8.3.1)`. Then re-run `yarn dev` and you should be ready to go!

We should see the default Chakra UI landing page for create nuxt-app with Chakra UI.

At this point I like to open the project in VS Code and edit the heading on the default `index.vue` page and watch it update in the browser, just to make sure everything is wired up as it should be.

That's all for this time.
