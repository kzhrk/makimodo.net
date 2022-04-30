<script lang="ts" setup>
const route = useRoute();
const res = await useFetch('/api/posts/1')

</script>

<template>
  <div>
    {{ res }}
  </div>
</template>

<style scoped>

</style>