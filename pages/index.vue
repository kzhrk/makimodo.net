<script lang="ts" setup>
const res = await useFetch('/api/posts');
const data = res.data;

function getFormatedDate(dateString: string) {
  const date = new Date(dateString);
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDay()}日`
}
</script>

<template>
  <div class="p-12 flex flex-col gap-16">
    <section v-for="({ metadata, episodeNumber }, i) in data" :key="i">
      <h1 class="text-2xl">
        <a class="text-link underline hover:no-underline" :href="`/episode/${episodeNumber}`">
          {{ metadata.title }}
        </a>
      </h1>
      <time class="text-sm" :datetime="metadata.date">{{ getFormatedDate(metadata.date) }}</time>
      <p class="mt-2">{{ metadata.description }}</p>
      <ul class="mt-2 flex gap-5">
        <li v-for="(id, index) in metadata.actor_ids" :key="index">
          <figure class="text-center">
            <img class="w-10 rounded-full" :src="`/images/actors/${id}.jpg`" :alt="`${id} のイメージ`">
          </figure>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>

</style>
