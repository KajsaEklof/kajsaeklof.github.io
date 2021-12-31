<template>
  <div class="layout-wrapper">
    <maintenance-banner />
    <the-navigation />
    <main class="content">
      <Nuxt />
    </main>
    <the-scroll-to-top />
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";

library.add(faVolumeUp, faLightbulb);

export default {
  mounted() {
    console.log(this.$device);
  },
};
</script>
