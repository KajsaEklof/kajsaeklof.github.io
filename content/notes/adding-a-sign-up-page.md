---
title: Building a sign up page with Chakra UI
description: How to build a form for users to sign up and sign in to your app with Chakra UI
tags: ['Chakra UI']
date: 02.11.2023
---

The first thing we need for our app is a way for users to sign up. So we're going to add a sign up page as well as a sign in page (for returning users).

### Add the pages

We need to new pages so go ahead and create `sign-up.vue` and `sign-in.vue` in your pages folder so that they automatically become nuxt-routes. Each component will using the Composition API and the setup function.

The scaffolding of both components will look something like the below.

```ts[sign-up.vue]
<template>
 // This is where the HTML for the sign up form will go
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue'

export default {
  name: 'SignUp',
  setup() {}
}

</script >
```

### The template parts

I found starting out with Chakra UI a little bit daunting as there are quite a few props that can be passed to each tag for styling purposes. But once you get going and get used to the props it's fun and fast!

The html for the form looks something like the below. This is surrounded by more `c-box` `c-stack` and `c-stack` tags to get the layout for the page. The important bit to get a html form tag in our template is to add the `as="form"` to your `c-stack` that wraps the `c-form-control` elements. Chakra UI doesn't provide a form component but we can just create one with [the `as` prop](https://vue.chakra-ui.com/style-props).

```html[sign-up.vue]
<c-stack as="form" spacing="4" @submit="handleSignUp">
  <c-form-control>
    <c-form-label for="email" type="username">Email</c-form-label>
    <c-input
      id="email"
      v-model="email"
      placeholder="Email"
      autocomplete="username"
    />
  </c-form-control>
  <c-form-control>
    <c-form-label for="password">Password</c-form-label>
    <c-input-group>
      <c-input
        id="password"
        v-model="password"
        placeholder="Password"
        :type="show ? '' : 'password'"
        autocomplete="new-password"
      />
      <c-input-right-element width="4.5rem">
        <c-button
          variant="outline"
          size="sm"
          is-round
          aria-label="Show/Hide password"
          @click="togglePasswordVisibility"
        >
          {{ show ? 'Hide' : 'Show' }}
        </c-button>
      </c-input-right-element>
    </c-input-group>
  </c-form-control>
  <c-button
    variant="solid"
    mt="8"
    :is-loading="isCreatingAccount"
    type="submit"
    >Create Account</c-button
  >
</c-stack>
```

We now have a form with two input fields and one submit button. Because this is a form we can handle the event of clicking the `Create Account` button with the `@submit` event on the form html tag. Just remember to add `event.preventDefault()` to the function for the submit event if you don't want the page to reload.

The sign in form will look very similar with an input field for the email and one for the password.

That's it. Sign up and sign in forms done and dusted.
