<template>
  <div class="layout-wrapper">
    <the-navigation />
    <main class="content">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";

library.add(faVolumeUp, faLightbulb);

export default {};
</script>
