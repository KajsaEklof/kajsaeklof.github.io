<template>
  <section id="projects">
    <h2 class="label">Projects</h2>
    <div class="wrapper">
      <div class="card">
        <h3>Puppy</h3>
        <p>
          Currently teaching our puppy Merlin to not eat every single sock in
          the house.
        </p>
        <h4>Tech Stack:</h4>
        <ul>
          <li>Lots of treats</li>
          <li>Patience</li>
          <li>Chew toys</li>
        </ul>
      </div>
      <img src="~/static/images/merlin.jpg" />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class TheProjects extends Vue {}
</script>
