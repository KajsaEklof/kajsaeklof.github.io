---
title: Add Supabase to Nuxt project
description: Add Supabase to your Nuxt 2 project
tags: ['Supabase, Nuxt']
---

## Add Supabase to your Nuxt project

This is how I added [Supabase](https://supabase.com/) to my Nuxt project, assuming you have a Supabase account and created a project.

### Install Supabase

Because my project is using Nuxt 2 (Vue 2) and Nuxt Bridge I'm not going to use [NuxtSupabze](https://supabase.nuxtjs.org/). Instead I added `supabase-js` and used the `provide` and `inject` functionality to be able to use my Supabase instance in all components in my project.

```shell
~/projects/my-project (main) » yarn add --dev @supabase/supabase-js
```

### Add environment variables

Once supabase-js is installed we want to add some environment variables in a `.env` file. To be able to use the environment variables in our Nuxt project we need to prefix them with `NUXT_`. I created two variables called `NUXT_ENV_SUPABASE_URL` and `NUXT_ENV_SUPABASE_KEY`. The url variable is my project url, it will look something like `https://aaaaaaaaaaaaa.supabase.co` and the key value is your `anon` public key. They can both be found in your project's settings under API.

### Create your Supabase client

I then created a new folder called `utils` and in there a new file called `supabase.ts`. In this file we'll be creating our supabase client that will be used throughout the project.

I imported `createClient` from supabase-js and provided the URL and KEY environment variables. Supa easy.

```ts [supabase.ts]
import { createClient } from '@supabase/supabase-js';

const supabaseURL = process.env.NUXT_ENV_SUPABASE_URL;
const supabaseKEY = process.env.NUXT_ENV_SUPABASE_KEY;
if (!supabaseURL || !supabaseKEY) {
  throw new Error('Supabase env not found');
}

const supabase = createClient(supabaseURL, supabaseKEY);

export default supabase;
```

### Make Supabase accessible in all components

We will now add our Supabase instance in a provide function in our default Nuxt layout. In `layouts/default.vue` import your supabase client as well ass the provide function from Vue.

```ts [default.vue]
import supabase from '@/utils/supabase.ts';
import { provide } from 'vue';
```

And then in the `setup` function we want to add a provide and pass in our supabase client from the import.

´´´js [default.vue]
setup() {
provide('supabase', supabase)
},
´´´

The whole layout now looks something like the below.

```ts [default.vue]
template>
  <div class="container">
    <CThemeProvider>
      <CColorModeProvider>
        <CBox font-family="body" as="main">
          <CReset />
          <Nuxt />
        </CBox>
      </CColorModeProvider>
    </CThemeProvider>
  </div>
</template>
<script>
import {
  CThemeProvider,
  CColorModeProvider,
  CReset,
  CBox,
} from '@chakra-ui/vue'
import { provide } from 'vue'
import supabase from '@/utils/supabase.ts'

export default {
  name: 'DefaultLayout',
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CBox,
  },
  setup() {
    provide('supabase', supabase)
  },
}
</script>
```

By using the provide function all child components that uses the default layout can make use of the supabase client we passed in. [Guide to `provide` and `inject`](https://vuejs.org/guide/components/provide-inject.html#inject).

Now in the `sign-up` page component we can inject the supabase client in our setup function and start using it.

```ts [sign-up.vue]
setup() {
    const supabase: SupabaseClient | undefined = inject('supabase')
}
```

Now when a user clicks the create account we can use the supabase auth API to create and account for them.

Here is the setup function as an example, it has a reactive state and two methods. One to toggle password visibility and one to handle creating an account for the user.

```ts [sign-up.vue]
setup() {
    const supabase: SupabaseClient | undefined = inject('supabase')

    const state = reactive({
      show: false,
      isCreatingAccount: false,
      email: '',
      password: '',
    })

    const togglePasswordVisibility = () => {
      state.show = !state.show
    }

    const handleSignUp = async (ev: MouseEvent) => {
      ev.preventDefault()
      ev.stopPropagation()
      if (!supabase) {
        return
      }

      state.isCreatingAccount = true
      const { user, session, error } = await supabase.auth.signUp({
        email: state.email,
        password: state.password,
      })

      state.isCreatingAccount = false
    }

    return {
      ...toRefs(state),
      togglePasswordVisibility,
      handleSignUp,
    }
  },
```

I added a similar setup function in the `sign-in.vue` page component.

```ts [sign-in.vue]
setup() {
    const supabase: SupabaseClient | undefined = inject('supabase')

    const state = reactive({
      show: false,
      isSigningIn: false,
      email: '',
      password: '',
    })

    const togglePasswordVisibility = () => {
      state.show = !state.show
    }

    const handleSignIn = async (ev: MouseEvent) => {
      ev.preventDefault()
      ev.stopPropagation()
      if (!supabase) {
        return
      }

      state.isSigningIn = true
      const { user, session, error } = await supabase.auth.signIn({
        email: state.email,
        password: state.password,
      })

      state.isSigningIn = false
    }

    return {
      ...toRefs(state),
      togglePasswordVisibility,
      handleSignIn,
    }
  },
```

The next steps will be to add some middlewares to stop users accessing pages if they are not signed in.
