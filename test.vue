<template><h3>vue ${1:name} component</h3></template>

<script>
import { ref, reactive, computed, onMount, onUnmounted, onBeforeMount,provide,inject,watch } from 'vue'
export default {
  name: '${1:name}',
  emits: [],
  props: {},
  components: {},
  mixins: [],
  inject:[],//可以option api注入方式
  setup(props, context) {
    // context.emit('emitsClick', 'name')
    onBeforeMount(() => {})
    return {}
  }
</script>

<style scoped></style>
<template>
  <div class="name">
    <h2>vue name component</h2>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

// defineProps({})
// const emits = defineEmits([])

// defineExpose({})
</script>

<style scoped></style>
