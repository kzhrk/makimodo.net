<template>
  <header>
    <div class="px-6 py-8 sm:px-12 sm:py-16 bg-slate-800 bg-opacity-75">
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
  <footer class="px-6 py-8 sm:px-12 sm:py-16 bg-gray-200 dark:bg-gray-700">
    <div class="w-auto sm:w-10/12 mx-auto flex flex-wrap gap-12">
      <div class="sm:flex-1">
        <p>インターネットを巻き戻すPodcast への感想や質問などは、Twitterでハッシュタグ <a class="link underline hover:no-underline" href="https://twitter.com/search?q=%23makimodo">#makimodo</a> をご利用ください。</p>
        <div class="mt-4">
          <a
            class="twitter-share-button"
            href="https://twitter.com/intent/tweet?hashtags=makimodo&url=https://makimodo.net">
            Tweet
          </a>
        </div>
      </div>
			<dl class="sm:flex-1 flex flex-col gap-2">
				<dt>新しいエピソードの配信を購読できます。</dt>
				<dd><a class="link underline hover:no-underline" href="https://podcasts.apple.com/jp/podcast/%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%8D%E3%83%83%E3%83%88%E3%82%92%E5%B7%BB%E3%81%8D%E6%88%BB%E3%81%99podcast/id1554626944">Apple Podcast で購読</a></dd>
				<dd><a class="link underline hover:no-underline" href="https://open.spotify.com/show/4dN5Q9bembieGrumDMqzwO">Spotify で購読</a></dd>
				<dd><a class="link underline hover:no-underline" href="https://music.amazon.co.jp/podcasts/34d721d5-4224-466a-9cd4-76dc595002cf/">Amazon Music で購読</a></dd>
				<dd><a class="link underline hover:no-underline" href="/feed.xml">RSS で購読</a></dd>
			</dl>
    </div>
    <p class="mt-16 text-sm text-center">
      &copy; 2021 
      <a class="link underline hover:no-underline" href="https://makimodo.net/">インターネットを巻き戻す Podcast</a>
    </p>
  </footer>
</template>

<style scoped>
header {
  @apply text-white;
  background-image: url("data:image/webp;base64,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");
  background-size: cover;
  background-position: center;
  text-shadow: 0 1px 5px black;
}
</style>