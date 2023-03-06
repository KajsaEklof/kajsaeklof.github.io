<template>
  <section class="about-me">
    <div class="image-wrapper">
      <img src="~/static/images/kajsa.jpg" />
      <h1>Kajsa Eklöf</h1>
      <h2>Web Developer</h2>
    </div>
    <div class="wrapper">
      <div class="blurb">
        <p>
          Hi! I’m Kajsa [💬 k-ay-s-uh], a front-end web developer based in the
          UK. I love problem solving, learning new things and building beautiful
          and usable web apps.
        </p>
        <p>
          I’m currently working at Comnoco building a no-code SaaS platform
          using Vue and TypeScript.
        </p>
        <p>
          Before I started my web developer journey I studied Information
          Architecture with specialisation Web Content Manager and Designer –
          Front-End Web Developer at
          <a
            href="https://www.hb.se/en/the-swedish-school-of-library-and-information-science-sslis/"
            title="The Swedish School of Library and Information Science"
            target="_blank"
            rel="exernal nofollow noreferrer"
            >The Swedish School of Library and Information Science
          </a>
          (SSLIS) at the University of Borås.
        </p>

        <h2 id="tech">tech</h2>
        <p>And in no particular order here is the tech I enjoy working with:</p>
        <ul>
          <li>JavaScript (ES6)</li>
          <li>TypeScript</li>
          <li>Vue.js</li>
          <li>Nuxt.js</li>
          <li>Node.js</li>
          <li>HTML5</li>
          <li>CSS</li>
          <li>SCSS</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class TheAboutMe extends Vue {}
</script>
