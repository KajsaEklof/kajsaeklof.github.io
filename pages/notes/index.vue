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
          <p class="updated-at">{{ formatDate(note.date) }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const { data: notes } = await useAsyncData('posts', () =>
  queryContent('notes')
    .only(['title', 'description', '_path', 'date'])
    .without('body')
    .sort({ date: -1 })
    .find()
);
</script>
