<template>
  <div class="mobile-navigation">
    <NuxtLink to="/" class="logo">kajsa eklöf</NuxtLink>
    <button v-if="!isOpen" class="burger-menu" @click="toggleMenu">
      <icon name="cil:burger" size="2em" />
    </button>

    <div v-if="isOpen" class="navigation-drawer">
      <button class="burger-menu burger-menu--close" @click="toggleMenu">
        <icon name="ic:round-close" size="2.2em" />
      </button>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/#tech" @click="toggleMenu">tech</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/notes" @click="toggleMenu">notes</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projects" @click="toggleMenu">projects</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/#contact" @click="toggleMenu">contact</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isOpen = ref(false);

function toggleMenu(): void {
  isOpen.value = !isOpen.value;

  const body = document.querySelector('body');
  if (isOpen.value) {
    body?.classList.add('hide-overflow');
  } else {
    body?.classList.remove('hide-overflow');
  }
}
</script>
