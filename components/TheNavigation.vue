<template>
  <div class="navigation">
    <!-- <NuxtLink to="/" class="pushable-logo">
        <div class="front">
          <img
            src="~/assets/images/kajsaekloflogo.png"
            class="nav-link"
            alt="Illustration of the letter k in three layers of red, yellow and purple with a sage green dot next to it."
          />
        </div>
      </NuxtLink> -->
    <!-- <div> -->
    <!-- <div>
        <font-awesome-icon :icon="['fas', 'volume-up']" />
        <font-awesome-icon :icon="['far', 'lightbulb']" />
      </div> -->
    <NuxtLink to="/" class="pushable-logo">
      <div class="front">
        <img
          src="~/static/images/kajsaekloflogo.png"
          class="nav-link"
          alt="Illustration of the letter k in three layers of red, yellow and purple with a sage green dot next to it."
        />
      </div>
    </NuxtLink>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/#projects" class="pushable">
            <span class="front">
              <span class="label">Projects</span>
            </span>
          </NuxtLink>
        </li>
        <!-- <li>
          <NuxtLink to="/#tech-journey" class="pushable">
            <span class="front">
              <span class="label">Tech Journey</span>
            </span>
          </NuxtLink>
        </li> -->
        <li>
          <NuxtLink to="/#contact" class="pushable">
            <span class="front">
              <span class="label">Contact</span>
            </span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <!-- </div> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class TheNavigation extends Vue {}
</script>
