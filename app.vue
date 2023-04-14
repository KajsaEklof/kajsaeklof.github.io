<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core';

const isLargeScreen = useMediaQuery('(min-width: 1024px)');

watch(isLargeScreen, (isLarge) => {
  const body = document.querySelector('body');
  if (!isLarge) {
    body?.classList.add('hide-overflow');
  } else {
    body?.classList.remove('hide-overflow');
  }
});
</script>

<template>
  <div class="layout-wrapper">
    <TheNavigation v-if="isLargeScreen" />
    <TheMobileNavigation v-else />
    <main :class="['content', { mobile: !isLargeScreen }]">
      <NuxtPage />
    </main>
    <TheFooter :class="{ mobile: !isLargeScreen }" />
  </div>
</template>
