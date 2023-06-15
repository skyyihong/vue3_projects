<template>
  <div>
    <h2>app component</h2>

    <h3>count:{{ storeCounter.count }}</h3>
    <h3>count+1:{{ storeCounter.count + 1 }}</h3>
    <h3>name:{{ storeCounter.name }}</h3>
    <h3>friend:{{ friend }}</h3>
    <button @click="clickChangeName">clickChangeName</button>
    <button @click="clickReset">clickReset</button>
    <button @click="clickPatch">clickPatch</button>
    <button @click="clickState">clickState</button>
    <!-- <father></father> -->
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { storeToRefs } from 'pinia'
// import father from '@/01.state内容学习/components/father.vue'
import useCounter from '../store/counter'

const storeCounter = useCounter() //storeCounter可以直接在html上使用
let { friend, age } = storeToRefs(storeCounter) //正常结构出来的值是没有响应式的，使用storeToRefs可以结构出有响应式的值

function clickChangeName(params) {
  storeCounter.name = 'hello world'
  storeCounter.friend = 'superStar'
}

function clickReset() {
  storeCounter.$reset() //恢复到原来配置的初始值
}
function clickPatch() {
  storeCounter.$patch({
    name: 'goose',
    count: 60,
  }) //可以对state里多个值一次性进行修改赋值
}

function clickState() {
  storeCounter.$state = {
    //可以对state里面进行整体替换
    name: 'goose1111',
    age: 28,
    friend: 'batman',
  }
}

//
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
