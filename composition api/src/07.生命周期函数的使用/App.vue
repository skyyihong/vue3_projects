<template>app compenont</template>

<script>
//在compositon API里已经没有boforecreate created了，setup函数里执行的内容就是在beforecreate阶段
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
} from 'vue'
export default {
  name: 'App',
  components: {},
  setup() {
    onMounted(() => {
      console.log('mounted')
    })
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
