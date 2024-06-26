<script lang="ts" setup>
import { format } from "date-fns";

const route = useRoute();
const res = await useFetch(`/api/episodes/${route.params.number}`);

if (res.error.value) {
	await navigateTo("/404");
}

const data = res.data;
const formatedDate = format(data.value.date, "yyyy年MM月dd日");
const audioUrl = `https://d2pbwgl7adh1pt.cloudfront.net${data.value.audioFilePath}`;

const title = `${data.value.title} | インターネットを巻き戻す Podcast`;
const description = data.value.description;
useHead(() => ({
	title,
	meta: [
		{
			name: "description",
			content: description,
		},
		{
			name: "twitter:description",
			content: description,
		},
		{
			name: "twitter:title",
			content: title,
		},
		{
			property: "og:url",
			content: `https://makimodo.net/episode/${route.params.number}`,
		},
	],
}));

function getSecondsFromTime(time: string) {
	const [seconds, minutes, hours] = time.split(":").reverse();
	let currentTime = Number.parseInt(seconds, 10);
	if (minutes) currentTime += 60 * Number.parseInt(minutes, 10);
	if (hours) currentTime += 60 * 60 * Number.parseInt(hours, 10);
	return currentTime;
}

onMounted(() => {
	const audio = document.querySelector("audio");
	const anchors = document.querySelector("table")?.querySelectorAll("a");

	window.twttr.widgets.load();

	// GTM
	if (audio) {
		const episode = route.params.number;
		audio.addEventListener("play", () => {
			window.dataLayer.push({
				episode: episode,
				event: "play_episode",
			});
		});
	}

	// Chapters
	if (anchors && audio) {
		for (const anchor of anchors) {
			anchor.addEventListener("click", (event) => {
				const target = event.target as HTMLAnchorElement;
				const time = target.href.replace(/.*#t=([\d:]+).*/, "$1");
				const currentTime = getSecondsFromTime(time);
				audio.currentTime = currentTime;
				audio.play();
			});
		}
	}
});
</script>

<template>
  <section class="px-6 py-12 sm:p-12">
    <h1 class="text-2xl sm:text-3xl text-center">{{ data.title }}</h1>
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
      <a class="link underline hover:no-underline" :href="audioUrl">MP3 ファイルをダウンロード</a>
    </div>
    <section class="mt-8">
      <h2 class="mb-4 text-xl">内容紹介</h2>
      <p>{{ data.description }}</p>
    </section>
    <section class="mt-8">
      <h2 class="mb-4 text-xl">出演者</h2>
      <ul class="flex gap-5">
        <li v-for="(id, index) in data.actorIds" :key="index">
          <figure class="text-center">
            <img class="w-16 rounded-full" width="64" height="64" loading="lazy" :src="`/images/actors/${id}.webp`" :alt="`${id} のイメージ`">
            <figcaption class="mt-1 text-sm">{{ id }}</figcaption>
          </figure>
        </li>
      </ul>
    </section>
    <section class="mt-8 html" v-html="data.html" />
    <section v-if="data.chapters && data.chapters.length > 0" class="mt-8">
      <h2 class="mb-4 text-xl">Chapters</h2>
      <table class="chapter-table">
        <thead>
          <tr>
            <th>name</th>
            <th>time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(chapter, i) in data.chapters" :key="i">
            <td><a :href="`#t=${chapter.time}`">{{ chapter.value }}</a></td>
            <td>{{ chapter.time }}</td>
          </tr>
        </tbody>
      </table>
    </section>
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
  @apply text-gray-700 dark:text-gray-200;
}
.html a {
  @apply text-link dark:text-blue-100 underline hover:no-underline;
}
</style>

<style scoped>
.chapter-table th,
.chapter-table td {
  @apply px-4 py-2 border border-gray-400;
}
.chapter-table thead {
  @apply bg-gray-200 dark:bg-gray-950 text-left dark:text-white;
}
.chapter-table tbody tr:nth-child(even) {
  @apply bg-gray-50 dark:bg-gray-900;
}
.chapter-table a {
  @apply text-link dark:text-blue-100 underline hover:no-underline;
}
</style>