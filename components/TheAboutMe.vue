<template>
  <section class="about-me">
    <h2 class="label">Hej &#128075;</h2>
    <div class="wrapper">
      <div class="blurb">
        <p>
          My name is Kajsa [&#x1F4AC; k-ay-s-uh] and I'm a front-end developer
          and Information Architect currently working at
          <a
            href="https://comnoco.io"
            target="_blank"
            rel="exernal nofollow noreferrer"
            title="Comnoco.io"
            >Comnoco.io</a
          >. I'm from Sweden 🇸🇪 but live in the UK 🇬🇧.
        </p>
        <p>
          I’ve studied Information Architecture with specialisation Web Content
          Manager and Designer – Front-End Web Developer at
          <a
            href="https://www.hb.se/en/the-swedish-school-of-library-and-information-science-sslis/"
            title="The Swedish School of Library and Information Science"
            target="_blank"
            rel="exernal nofollow noreferrer"
            >The Swedish School of Library and Information Science
          </a>
          (SSLIS) at the University of Borås.
        </p>
        <h3>Tech I enjoy working with:</h3>
        <ul>
          <li>JavaScript (ES6)</li>
          <li>TypeScript</li>
          <li>Vue.js / Nuxt.js</li>
          <li>Node.js</li>
          <li>HTML5</li>
          <li>CSS / SCSS</li>
        </ul>
      </div>
      <img src="~/static/images/kajsa.jpg" />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class TheAboutMe extends Vue {}
</script>
