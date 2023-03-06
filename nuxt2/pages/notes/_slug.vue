<template>
  <article class="blog-post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.description }}</p>
    <div class="tags">
      <span v-for="(tag, i) in post.tags" :key="i" class="tag">{{ tag }}</span>
    </div>
    <nav class="toc">
      <ul>
        <li v-for="link of post.toc" :key="link.id">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <nuxt-content :document="post" />
    <hr />
    <p>Post last updated: {{ formatDate(post.updatedAt) }}</p>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch();
    console.log(post);
    return { post };
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('en', options);
    },
  },
};
</script>
