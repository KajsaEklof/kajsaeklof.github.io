<template>
  <div id="projects">
    <h1>Projects</h1>
    <div class="project-card">
      <h2>Contrast Checker</h2>
      <div class="project-card--content">
        <div class="text">
          <div class="description">
            <p>
              An app that checks the colour contrast between two colours using
              the
              <a
                href="https://webaim.org/resources/contrastchecker/"
                target="external"
                >WebAIM API</a
              >. There is also a theme feature where you can check an entire
              JSON object of your app's theme colours in one go. No more copy
              and paste each colour one by one!
            </p>
            <h3>Tech Stack:</h3>
            <ul>
              <li>Vue 3</li>
              <li>Typescript</li>
              <li>Vite</li>
              <li>SCSS</li>
            </ul>
          </div>
          <div class="links">
            <a
              href="https://colourcontrastchecker.netlify.app/"
              target="external"
              >Demo</a
            >
            <a
              href="https://github.com/KajsaEklof/contrast-checker"
              target="external"
              >Github</a
            >
            <NuxtLink to="/notes/contrast-checker">Notes</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
