<template>
  <h2>vue info component</h2>
  {{ name }}
</template>

<script>
import { ref, inject } from 'vue'
export default {
  name: 'info',
  emits: [],
  props: {},
  components: {},
  setup() {
    const name = inject('name')
    // console.log(name)
    return { name }
  },
}
</script>

<style scoped></style>
