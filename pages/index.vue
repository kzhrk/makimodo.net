<script lang="ts" setup>
const route = useRoute();
const page = route.query.page || 1;
const res = await useFetch(`/api/posts?page=${page}`);
const data = res.data;

function getFormatedDate(dateString: string) {
  const date = new Date(dateString);
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDay()}日`
}

</script>

<template>
  <section v-for="({ metadata, episodeNumber }, i) in data" :key="i">
    <h1>
      <a :href="`/episode/${episodeNumber}`">
        {{ metadata.title }}
      </a>
    </h1>
    <time :datetime="metadata.date">{{ getFormatedDate(metadata.date) }}</time>
    <p>{{ metadata.description }}</p>
    <ul class="flex gap-5">
      <li v-for="(id, index) in metadata.actor_ids" :key="index">
        <figure class="text-center">
          <img class="w-12 rounded-full" :src="`/images/actors/${id}.jpg`" :alt="`${id} のイメージ`">
          <figcaption class="mt-1 text-sm">{{ id }}</figcaption>
        </figure>
      </li>
    </ul>
  </section>
</template>

<style scoped>

</style>
