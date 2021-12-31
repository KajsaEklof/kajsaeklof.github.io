<template>
  <transition name="fade">
    <button
      v-if="showButton"
      class="scroll-to-top"
      @click="scrollToTop"
      @keydown="scrollToTop"
    >
      To the top
    </button>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class TheScrollToTop extends Vue {
  scrollY = 0;

  get showButton(): boolean {
    if (50 < this.scrollY) {
      return true;
    }

    return false;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  updateScrollY(): void {
    console.log(window);
    this.scrollY = window.scrollY;
  }

  mounted(): void {
    window.addEventListener("scroll", this.updateScrollY);
  }
}
</script>
