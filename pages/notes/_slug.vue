<template>
  <article>
    <h1>{{ post.title }}</h1>
    <p>{{ post.description }}</p>
    <nav>
      <ul>
        <li v-for="link of post.toc" :key="link.id">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <nuxt-content :document="post" />
    <p>Post last updated: {{ formatDate(post.updatedAt) }}</p>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content("posts", params.slug).fetch();
    return { post };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>
