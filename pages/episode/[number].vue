<script lang="ts" setup>
const route = useRoute();
const res = await useFetch(`/api/posts/${route.params.number}`);
const data = res.data;
const date = new Date(data.value.date);
const formatedDate = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
const audioUrl = `https://d2pbwgl7adh1pt.cloudfront.net${ data.value.audio_file_path }`

const title = `${data.value.title} | インターネットを巻き戻す Podcast`;
const description = data.value.description;
useHead(() => ({
  title,
  meta: [{
    name: 'description',
    content: description
  },{
    name: 'twitter:card',
    content: 'summary_large_image'
  }, {
    name: 'twitter:description',
    content: description
  }, {
    name: 'twitter:image',
    content: 'https://makimodo.net/images/logo.png'
  }, {
    name: 'twitter:title',
    content: title
  },{
    property: 'og:image',
    content: 'https://makimodo.net/images/logo.png'
  },{
    property: 'og:site_name',
    content: 'インターネットを巻き戻すPodcast'
  },{
    property: 'og:type',
    content: 'blog'
  },{
    property: 'og:url',
    content: 'https://makimodo.net/'
  }],
  link: [{
    rel: 'alternate',
    type: 'application/rss+xml',
    href: 'https://makimodo.net/feed.xml'
  }]
}))

function getSecondsFromTime(time: string) {
  const [seconds, minutes, hours] = time.split(':').reverse();
  let currentTime = Number.parseInt(seconds, 10);
  if (minutes) currentTime += Number.parseInt(60 * Number.parseInt(minutes, 10), 10);
  if (hours) currentTime += Number.parseInt(60 * 60 * Number.parseInt(hours, 10), 10);
  return currentTime;
}

onMounted(() => {
  const audio = document.querySelector('audio');
  const anchors = document.querySelector('table')?.querySelectorAll('a');

  // GTM
  if (audio) {
    const episode = route.params.number;
    audio.addEventListener('play', () => {
      window.dataLayer.push({
        episode: episode,
        event: 'play_episode'
      });
    });
  }

  // Chapters
  if (anchors) {
    [...anchors].forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const time = e.target.href.replace(/.*#t=([\d:]+).*/, '$1');
        const currentTime = getSecondsFromTime(time);
        audio.currentTime = currentTime;
        audio.play()
      })
    })
  }
})
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
      <a class="text-link underline hover:no-underline" :href="audioUrl">MP3 ファイルをダウンロード</a>
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
  @apply text-xl mt-8 mb-4;
}
.html ul {
  @apply pl-4;
}
.html ul li {
  @apply mt-2 list-disc;
}
.html ul li::marker {
  @apply text-gray-700;
}
.html a {
  @apply text-link underline hover:no-underline;
}
.html table th,
.html table td {
  @apply p-2 border border-gray-400;
}
.html table thead {
  @apply bg-gray-200 text-left;
}
.html table tbody tr:nth-child(even) {
  @apply bg-gray-50;
}
</style>
