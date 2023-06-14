<template>
  app compenont
  <button @click="btnClick">click</button>
  <info></info>
</template>

<script>
import { provide, inject, ref, reactive } from 'vue'
import info from '@/08.provide和inject的使用,以及用ref包裹/components/info.vue'
export default {
  name: 'App',
  components: { info },
  setup() {
    const name = ref('hongyan')
    provide('name', name) //name使用ref进行包裹实现响应式数据

    function btnClick() {
      console.log(111)
      name.value = 'hello world'
    }
    return {
      btnClick,
    }
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
