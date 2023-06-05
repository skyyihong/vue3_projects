<template>
  app page
  <hr />
  <Home></Home>
  <hr />
  <!-- 第一种：默认在组件使用v-model 相当于 :model-value="count"  @update:model-value="count=$event"-->
  <!-- <Page v-model="count"></Page> -->

  <!-- 第二种：v-model="count"，等同于一下表示 -->
  <!-- <Page :model-value="count" @update:model-value="count=$event"></Page> -->

  <!-- 第三种：自定义prop属性model-value的名称 -->
  <Page v-model:count1="count"></Page>
</template>

<script>
import { defineAsyncComponent } from 'vue'
// import Home from './components/Home.vue'
//通过是import('xxx')会返回一个promise对象，res结果会是import default的那个对象
//通过使用vue提供的defineAsyncComponent 可以异步获取组件对象
const Home = defineAsyncComponent(() => {
  return import('./components/Home.vue')
})

import Page from './components/page'
import app from '@/minix/default'
export default {
  mixins: [app], // 组件混入使用，全局混入查看main.js的代码
  name: 'App',
  components: { Home, Page },
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    // btnClick(event) {
    //   console.log(event)
    //   this.count += event
    // },
  },
  mounted() {
    console.log('app mounted')
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
