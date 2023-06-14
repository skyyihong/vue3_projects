<template>
  app compenont
  <info :myInfo="myInfo" @changeInfo="changeInfo"> </info>
</template>

<script>
import info from '../02.组件传值和context.emit/components/info.vue'
import { reactive, ref } from 'vue'
export default {
  name: 'App',
  components: { info },
  setup() {
    const myInfo = ref({ name: 'hongyan', age: 18 })
    const changeInfo = (e) => {
      console.log(e)
      myInfo.value = e
    }
    return { myInfo, changeInfo }
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

_shallowReactive_isReadonly_isRef_isReactive_shallowReadonly
