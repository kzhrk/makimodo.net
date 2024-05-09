<script lang="ts" setup>
const title = "インターネットを巻き戻す Podcast";
const description = "インターネットのニュースや雑談を話す Podcast です";

useHead(() => ({
	title,
	meta: [
		{
			name: "description",
			content: description,
		},
		{
			name: "twitter:card",
			content: "summary_large_image",
		},
		{
			name: "twitter:description",
			content: description,
		},
		{
			name: "twitter:image",
			content: "https://makimodo.net/images/logo.png",
		},
		{
			name: "twitter:title",
			content: title,
		},
		{
			property: "og:image",
			content: "https://makimodo.net/images/logo.png",
		},
		{
			property: "og:site_name",
			content: "インターネットを巻き戻すPodcast",
		},
		{
			property: "og:type",
			content: "blog",
		},
		{
			property: "og:url",
			content: "https://makimodo.net/",
		},
	],
	link: [
		{
			rel: "alternate",
			type: "application/rss+xml",
			href: "https://makimodo.net/feed.xml",
		},
		{
			rel: "preconnect",
			href: "https://www.googletagmanager.com",
		},
	],
}));
</script>

<template>
  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KJ747KN"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<style>
body {
	@apply dark:bg-gray-800 dark:text-white;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica Neue, Hiragino Kaku Gothic ProN, meiryo, sans-serif;
}
.link {
	@apply text-link dark:text-blue-100;
}
</style>