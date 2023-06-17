<template>
  <h3>app component</h3>
  <input type="text" value="" placeholder="请输入内容" ref="inp" v-focus />
</template>

<!-- <script>
import { ref, onMounted } from 'vue'
export default {
  name: 'App',
  directives: {
    focus: { //指令为v-fouce，但名字只须写focus
      mounted(el) {
        console.log(111)
        el.focus()
      },
    },
  },
  setup() {
    const inp = ref()
    return { inp }
  },
  
}
</script> -->
<script setup>
import { ref } from 'vue'
const inp = ref()
// const vFocus = {
//   //名字需要以v开头，同时后面指明名称第一个字母大小。vfocus是错误的。
//   mounted(el) {
//     // console.log(111)
//     el.focus()
//   },
// }
// return { inp }
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
