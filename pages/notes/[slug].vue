<script setup>
const { path } = useRoute();
const { data: article } = await useAsyncData(path, () =>
  queryContent("notes").where({ _path: path }).findOne()
);

function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en", options);
}
</script>

<template>
  <article class="blog-post">
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <div class="tags">
      <span v-for="(tag, i) in article.tags" :key="i" class="tag">{{
        tag
      }}</span>
    </div>
    <nav class="toc">
      <ul>
        <li v-for="link of article.toc" :key="link.id">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <ContentRenderer :value="article"> </ContentRenderer>

    <hr />
    <p>Post last updated: {{ formatDate(article.updatedAt) }}</p>
  </article>
</template>
