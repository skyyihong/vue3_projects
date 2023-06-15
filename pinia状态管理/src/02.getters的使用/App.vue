<template>
  <div>
    <h2>app component</h2>

    name:{{ userStore.name }}
    <br />
    byID:{{ findNumNameByid(2) }}
    <hr />
    fullName:{{ userStore.fullName }} myfriend:{{ userStore.myFriend }}
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import useUser from '@/store/user'

const userStore = useUser()
const findNumNameByid = userStore.findNumName //由于getter不能进行传参，可以返回一个函数，通过函数可以进行传参
console.log(findNumNameByid(2))
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
