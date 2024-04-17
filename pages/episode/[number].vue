<script lang="ts" setup>
import { parse } from "marked";
import parseMD from "parse-md";

const route = useRoute();
const res = await useFetch(`/api/posts/${route.params.number}`)
const { metadata, content } = parseMD(res.data.value)
const html = parse(content);
</script>

<template>
  <div v-html="html"></div>
</template>

<style scoped>

</style>
