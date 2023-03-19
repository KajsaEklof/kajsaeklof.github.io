<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    code?: string;
    language?: string | null;
    filename?: string | null;
    highlights?: number[];
  }>(),
  { code: '', language: null, filename: null, highlights: undefined }
);
</script>

<template>
  <div class="code-wrapper">
    <span v-if="props.filename" class="filename">
      {{ props.filename }}
    </span>
    <slot />
  </div>
</template>

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
