<template>
  <h3>{{ $store.state.counter }}</h3>
  <button @click="increment">add+10</button>
</template>

<!-- <script>

</script> -->

<script setup>
import { ref, toRefs } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

function increment() {
  store.dispatch('fetchDate', 20)
}
</script>

<style></style>
