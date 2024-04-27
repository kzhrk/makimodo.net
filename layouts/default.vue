<script lang="ts">
</script>

<template>
  <header>
    <div class="px-6 py-8 sm:px-12 sm:py-16 bg-slate-400 bg-opacity-75">
      <div class="w-auto sm:w-10/12 mx-auto">
        <h1 class="text-xl sm:text-3xl font-bold">
          <nuxt-link class="font-normal" href="/">インターネットを巻き戻す Podcast</nuxt-link>
        </h1>
        <p class="hidden sm:block mt-2 text-sm">インターネットのニュースや雑談を話す Podcast です</p>
      </div>
    </div>
  </header>
  <main class="w-auto sm:w-10/12 mx-auto">
    <nuxt-page />
  </main>
  <footer class="px-6 py-8 sm:px-12 sm:py-16 bg-gray-200">
    <div class="w-auto sm:w-10/12 mx-auto flex flex-wrap gap-12">
      <div class="sm:flex-1">
        <p>インターネットを巻き戻すPodcast への感想や質問などは、Twitterでハッシュタグ <a class="text-link underline hover:no-underline" href="https://twitter.com/search?q=%23makimodo">#makimodo</a> をご利用ください。</p>
        <div class="mt-4">
          <a
            class="twitter-share-button"
            href="https://twitter.com/intent/tweet?hashtags=makimodo&url=https://makimodo.net">
            Tweet
          </a>
        </div>
      </div>
      <div class="sm:flex-1">
        <p>
          新しいエピソードの配信を購読できます。
        </p>
        <ul class="mt-2 ml-4 list-disc flex flex-col gap-2">
          <li><a class="text-link underline hover:no-underline" href="https://podcasts.apple.com/jp/podcast/%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%8D%E3%83%83%E3%83%88%E3%82%92%E5%B7%BB%E3%81%8D%E6%88%BB%E3%81%99podcast/id1554626944">Apple Podcastで購読</a></li>
          <li><a class="text-link underline hover:no-underline" href="https://podcasts.google.com/feed/aHR0cHM6Ly93d3cubWFraW1vZG8ubmV0L2ZlZWQueG1s">Google Podcastで購読</a></li>
          <li><a class="text-link underline hover:no-underline" href="/feed.xml">RSSで購読</a></li>
        </ul>
      </div>
    </div>
    <p class="mt-16 text-sm text-center">
      &copy; 2021 
      <a class="text-link underline hover:no-underline" href="https://makimodo.net/">インターネットを巻き戻す Podcast</a>
    </p>
  </footer>
</template>

<style scoped>
header {
  @apply text-white;
  background-image: url(/images/artwork.webp);
  background-size: cover;
  background-position: center;
  text-shadow: 0 1px 5px black;
}
</style>