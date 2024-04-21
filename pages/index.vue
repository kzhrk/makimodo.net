<script lang="ts" setup>
import { format } from 'date-fns'

const res = await useFetch('/api/posts');
const data = res.data;

function getFormatedDate(dateString: string) {
  return format(dateString, 'yyyy年M月d日');
}
</script>

<template>
  <div class="p-12 flex flex-col gap-16">
    <section v-for="(episode, i) in data" :key="i">
      <h1 class="text-2xl">
        <nuxt-link class="text-link underline hover:no-underline" :to="`/episode/${episode.episodeNumber}`">
          {{ episode.title }}
        </nuxt-link>
      </h1>
      <time class="text-sm" :datetime="episode.date">{{ getFormatedDate(episode.date) }}</time>
      <p class="mt-2">{{ episode.description }}</p>
      <ul class="mt-2 flex gap-5">
        <li v-for="(id, index) in episode.actorIds" :key="index">
          <figure class="text-center">
            <img class="w-10 rounded-full" :src="`/images/actors/${id}.jpg`" :alt="`${id} のイメージ`">
          </figure>
        </li>
      </ul>
    </section>
  </div>
</template>
