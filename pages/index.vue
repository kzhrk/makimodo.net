<script lang="ts" setup>
const route = useRoute();
const page = route.query.page || 1;
const res = await useFetch(`/api/posts?page=${page}`);
</script>

<template>
  <p>{{ res.data }}</p>
  <p>一覧ページ</p>
</template>

<style scoped>

</style>
