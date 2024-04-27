<script lang="ts" setup>
import { format } from "date-fns";

const res = await useFetch("/api/episodes");
const data = res.data;

function getFormatedDate(dateString: string) {
	return format(dateString, "yyyy年M月d日");
}
</script>

<template>
  <section class="px-6 sm:px-12 my-12" v-for="(episode, i) in data" :key="i">
    <h1 class="text-2xl">
      <nuxt-link class="text-link underline hover:no-underline" :to="`/episode/${episode.episodeNumber}`">
        {{ episode.title }}
      </nuxt-link>
    </h1>
    <time class="text-sm" :datetime="episode.date">{{ getFormatedDate(episode.date) }}</time>
    <p class="mt-2">{{ episode.description }}</p>
    <div class="mt-2 flex gap-5">
      <figure v-for="(id, index) in episode.actorIds" :key="index" class="text-center">
        <img class="w-10 rounded-full" width="40" height="40" loading="lazy" :src="`/images/actors/${id}.webp`" :alt="`${id} のイメージ`">
      </figure>
    </div>
  </section>
</template>
