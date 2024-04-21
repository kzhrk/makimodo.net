<script lang="ts" setup>
const route = useRoute();
const res = await useFetch(`/api/posts/${route.params.number}`);
const data = res.data;
const date = new Date(data.value.date);
const formatedDate = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDay()}日`
const audioUrl = `https://d2pbwgl7adh1pt.cloudfront.net${ data.value.audio_file_path }`
</script>

<template>
  <section class="p-12">
    <h1 class="text-3xl text-center">{{ data.title }}</h1>
    <div class="mt-4 text-center text-sm">
      <time :datetime="data.date">{{ formatedDate }}</time>
    </div>
    <audio
      class="w-full mt-12"
      preload="auto"
      :src="audioUrl"
      controls
    />
    <div class="mt-4 text-right text-sm">
      <a class="text-blue underline" :href="audioUrl">MP3 ファイルをダウンロード</a>
    </div>
    <section class="mt-8">
      <h2 class="mb-4 text-xl">内容紹介</h2>
      <p>{{ data.description }}</p>
    </section>
    <section class="mt-8">
      <h2 class="mb-4 text-xl">出演者</h2>
      <ul class="flex gap-5">
        <li v-for="(id, index) in data.actor_ids" :key="index">
          <figure class="text-center">
            <img class="w-16 rounded-full" :src="`/images/actors/${id}.jpg`" :alt="`${id} のイメージ`">
            <figcaption class="mt-1 text-sm">{{ id }}</figcaption>
          </figure>
        </li>
      </ul>
    </section>
    <section class="mt-8 html" v-html="data.html" />
    <div class="mt-8">
      <a class="twitter-share-button" :href="`https://twitter.com/intent/tweet?hashtags=makimodo&url=https://makimodo.net/episode/${ $route.params.number }&text=${ data.title }`">
        Tweet
      </a>
    </div>
  </section>
</template>

<style>
.html h2 {
  @apply text-xl mb-4;
}
.html ul {
  @apply pl-4;
}
.html ul li {
  @apply mt-2 text-blue underline list-disc;
}
.html ul li::marker {
  @apply text-gray-dark;
}
</style>
