<script lang="ts">
</script>

<template>
  <div class="w-10/12 mx-auto">
    <header class="bg-gray p-12">
      <h1 class="text-3xl font-bold">
        <a href="/">インターネットを巻き戻す Podcast</a>
      </h1>
      <p class="mt-2 text-sm">インターネットのニュースや雑談を話す Podcast です</p>
    </header>
    <main>
      <nuxt-page />
    </main>
    <footer class="bg-gray-light">
      <div class="flex gap-12">
        <div class="flex-1 p-6">
          <p>インターネットを巻き戻すPodcast への感想や質問などは、Twitterでハッシュタグ <a href="https://twitter.com/search?q=%23makimodo">#makimodo</a> をご利用ください。</p>
          <div class="mt-4">
            <a
              class="twitter-share-button"
              href="https://twitter.com/intent/tweet?hashtags=makimodo&url=https://makimodo.net">
              Tweet
            </a>
          </div>
        </div>
        <div class="flex-1 p-6">
          <p>
            新しいエピソードの配信を購読できます。
          </p>
          <ul>
            <li><a href="https://podcasts.apple.com/jp/podcast/%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%8D%E3%83%83%E3%83%88%E3%82%92%E5%B7%BB%E3%81%8D%E6%88%BB%E3%81%99podcast/id1554626944">Apple Podcastで購読</a></li>
            <li><a href="https://podcasts.google.com/feed/aHR0cHM6Ly93d3cubWFraW1vZG8ubmV0L2ZlZWQueG1s">Google Podcastで購読</a></li>
            <li><a href="/feed.xml">RSSで購読</a></li>
          </ul>
        </div>
      </div>
      <p class="text-sm text-center">
        &copy; 2021 
        <a class="text-blue underline hover:no-underline" href="https://makimodo.net/">インターネットを巻き戻す Podcast</a>
      </p>
    </footer>
  </div>
</template>

<style scoped>

</style>