<template>
  app compenont111

  <button ref="btn">click</button>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  name: 'App',
  components: {},
  setup() {
    const btn = ref()
    onMounted(() => {
      console.log(btn.value) //以这种方式可以拿到标签ref属性对应的dom元素
    })
    return { btn }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
