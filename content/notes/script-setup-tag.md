---
title: Refactor setup function to setup script tag
description: Refactor a small component from setup function to script setup tag syntax.
tags: ["Vue, Composition API", "Vue 3"]
date: 01.20.2023
---

## What is the script setup tag

So just as I had dived into the Vue 3 Composition API and decided to use `setup()` in my component files I learn that actually its now recommended to use the `setup` tag in the script. So what does that mean? It means that we add `setup` to the opening `<script>` tag in the component file.

By adding the `setup` tag we can use the composition API in this single file component.

Read more about the [script setup tag in the docs](https://vuejs.org/api/sfc-script-setup.html).

I've converted the sign in page component below to use the script setup tag instead of the setup function.

With the setup function:

```ts [sign-in.vue]
<script lang="ts">
import { inject, reactive, toRefs } from 'vue'
import { SupabaseClient } from '@supabase/supabase-js'

export default {
  name: 'SignIn',
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
}
</script>
```

With the setup script tag:

```ts [sign-in.vue]

<script lang="ts" setup>
import { inject, ref } from 'vue'
import { SupabaseClient } from '@supabase/supabase-js'

const show = ref(false)
const isSigningIn = ref(false)
const email = ref('')
const password = ref('')
const supabase: SupabaseClient | undefined = inject('supabase')

function togglePasswordVisibility(): void {
  show.value = !show.value
}

async function handleSignIn(ev: MouseEvent): Promise<void> {
  ev.preventDefault()
  ev.stopPropagation()
  if (!supabase) {
    return
  }

  isSigningIn.value = true
  const { user, session, error } = await supabase.auth.signIn({
    email: email.value,
    password: password.value,
  })
}

</script>
```

With the script setup tag we don't have to declare the reactive state in the setup function and remember to return everything we add in there. However we do still need to use `ref()` when declaring variables if we want them to be reactive. Everything we declare at the top level in the script is available in the template.

Note, the functions kept being flagged as "declared but not used". This is because I was using the Vetur extension and it doesn't support the script setup syntax. A quick swap to [Volar](https://twitter.com/youyuxi/status/1458003506636328966?lang=en-GB) and we're all good.
