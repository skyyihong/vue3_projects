<template>
  <div class="app">
    app compenont
    <!-- 子组件自己使用不用再用component注册了 -->
    <child :age="age"></child>
    <child @changeAge="chageAge" ref="childref"></child>
    <br />

    <button @click="btnClick">click</button>
  </div>
</template>

<script setup>
// import { } from 'vue';
import { onMounted, ref, defineExpose, defineProps, defineEmits } from 'vue'
import child from '@/10.setup语法糖用法/components/child.vue'
const btnClick = () => {
  console.log('btnClick')
}
const age = ref(18)
function chageAge(payload) {
  age.value = payload
}
const childref = ref()
onMounted(() => {
  childref.value.foo()
})
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
