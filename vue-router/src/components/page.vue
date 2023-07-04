<template>page component user:{{ $route.params.id }} query:{{ $route.query }}</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { onMounted } from 'vue'
const router = useRouter()
const route = useRoute()

onMounted(() => {
  // console.log(Router)
  console.log('page:', route.params)
  console.log('page:', route.query)
})
</script>

<style scoped></style>
