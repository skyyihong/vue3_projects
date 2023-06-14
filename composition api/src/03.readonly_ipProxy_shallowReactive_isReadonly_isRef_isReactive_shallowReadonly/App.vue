<template>
  <h1>app compenont</h1>
  <!-- <div>{{ info1.hobby.play }}</div> -->
  <button @click="changeHobby">changeHobby</button>
</template>

<script>
import { readonly, toRef, toRefs, triggerRef, shallowRef, reactive, isProxy } from 'vue'
export default {
  name: 'App',
  components: {},
  setup(props) {
    const info = readonly({
      //readonly 只能对reative或object进行包裹,对字面量或ref的不可使用
      name: 'hongyan',
      age: 18,
    })
    console.log(info.name)
    info.name = 'hello world' //不能修改readonly重新包裹保护的数据
    console.log(info.name)
    //-------------------------------------------------------------------------------
    console.log(isProxy(info))

    return {
      info,
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
