<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import eventbus from '@/utils/eventbus'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  methods: {
    age: (age) => {
      console.log(age)
    },
  },
  created() {
    eventbus.on('click', this.age) //注册事件
  },
  unmounted() {
    eventbus.off('click', age) //注销事件
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
