<template>
  <button @click="btnclick">click</button>
  <img ref="vuelogo" alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld ref="helloworld" msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  methods: {
    btnclick() {
      console.log(this.$refs.vuelogo) //获取img的dom
      console.log(this.$refs.helloworld) //如果ref属性用在组件上，将获取该组件的实例，并可以获取组件所有属性和方法
      console.log(this.$refs.helloworld.$el) //组件的$el可以获取整个组件的dom原始元素
      console.log(this.$refs.helloworld.$parent) //组件的$parent 获取组件的父组件实例
      console.log(this.$refs.helloworld.$root) //组件的$root 获取组件的根组件
    },
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
