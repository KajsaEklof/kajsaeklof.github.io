<template>
  <div class="blog">
    <h2>Notes</h2>
    <p>Things I learn along the way.</p>
    <ul>
      <li v-for="(post, i) in posts" :key="i">
        <NuxtLink
          :to="{ name: 'notes-slug', params: { slug: post.slug } }"
          class="post card"
        >
          <h3 class="title">{{ post.title }}</h3>
          <p class="description">{{ post.description }}</p>
          <p class="updated-at">{{ formatDate(post.updatedAt) }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const posts = await $content("posts")
      .only(["title", "description", "slug", "updatedAt"])
      .sortBy("createdAt", "desc")
      .fetch();
    return { posts };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>
