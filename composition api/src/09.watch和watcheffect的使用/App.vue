<template>
  <div>app compenont {{ info.name }} {{ info.age }} {{ info.friend.name }}</div>

  <button @click="changeInfo">click-watch</button>
  <hr />
  {{ info1.count }}
  <button @click="changeInfoEffect">click-watcheffect</button>
</template>

<script>
import { watch, watchEffect, ref, reactive } from 'vue'
export default {
  name: 'App',
  components: {},
  setup(props, context) {
    const info = ref({
      name: 'hongyan',
      age: 18,
      friend: {
        name: 'javascript',
      },
    })

    const info1 = reactive({
      name: 'hongyan',
      age: 18,
      count: 0,
      friend: {
        name: 'javascript',
      },
    })
    watch(
      info,
      (n, o) => {
        console.log('监控到watch')
      },
      { immediate: false, deep: true }
    )
    const watchStop = watchEffect(() => {
      //对函数里的所有变量进行watch，
      console.log(info1.count)
      if (info1.count > 10) {
        watchStop() //函数执行的返回值为停止监听的函数，执行它可以停止监听
      }
    })

    function changeInfo() {
      info.value.age = 28
      info.value.friend.name = 'python'
    }
    function changeInfoEffect() {
      info1.count++
    }
    return { changeInfo, info, info1, changeInfoEffect }
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
