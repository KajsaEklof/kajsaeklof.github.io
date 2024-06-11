<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core';

const isLargeScreen = useMediaQuery('(min-width: 1024px)');
const showMobileMenu = ref(false);

watch(isLargeScreen, (isLarge) => {
  if (isLarge) {
    showMobileMenu.value = false;
  } else {
    showMobileMenu.value = true;
  }
  
  const body = document.querySelector('body');

  body?.classList.remove('hide-overflow');
});

onMounted(() => {
  if (isLargeScreen.value) {
    showMobileMenu.value = true;
  }
});
</script>

<template>
  <div class="layout-wrapper">
    <TheMobileNavigation v-if="showMobileMenu" />
    <TheNavigation v-else />
    <main :class="['content', { mobile: !showMobileMenu }]">
      <NuxtPage />
    </main>
    <TheFooter :class="{ mobile: !isLargeScreen }" />
  </div>
</template>
