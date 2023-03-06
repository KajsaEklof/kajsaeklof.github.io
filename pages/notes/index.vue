<template>
  <div class="blog">
    <h2>Notes</h2>
    <p>
      Things I learn along the way and me repeating steps of how to do things to
      myself so I remember them. Tutorials from me to me.
    </p>
    <ul>
      <li v-for="(note, i) in notes" :key="i">
        <NuxtLink
          :to="{
            name: 'notes-slug',
            params: { slug: note._path.replace(/^\/notes\//, '') },
          }"
          class="post card"
        >
          <h3 class="title">{{ note.title }}</h3>
          <p class="description">{{ note.description }}</p>
          <!-- <p class="updated-at">{{ formatDate(note.updatedAt) }}</p> -->
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
// export default {
//   async asyncData({ $content, params }) {
//     const posts = await $content('posts')
//       .only(['title', 'description', 'slug', 'updatedAt'])
//       .sortBy('createdAt', 'desc')
//       .fetch();
//     return { posts };
//   },
//   methods: {
//     formatDate(date) {
//       const options = { year: 'numeric', month: 'long', day: 'numeric' };
//       return new Date(date).toLocaleDateString('en', options);
//     },
//   },
// };
// const { data } = await useAsyncData("home", () => queryContent("/").findOne());

const { data: notes } = await useAsyncData("posts", () =>
  queryContent("notes")
    .only(["title", "description", "slug", "_path", "updatedAt"])
    .without("body")
    .find()
);

// function formatDate(date) {
//   const options = { year: "numeric", month: "long", day: "numeric" };
//   return new Date(date).toLocaleDateString("en", options);
// }
</script>
