<template>
  <h3>{{ $store.state.counter }}</h3>
  <button @click="increment1">add+20</button>
  <button @click="increment2">add+20(并通知执行成功)</button>
  <button @click="fetchDate(10)">add+10(并通知执行成功)</button>
</template>

<!-- <script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['fetchDate']), //
  },
}
</script>  -->

<script setup>
//actions是用来做异步操作，同时actions也不能修改state的数据，需要调用mutation进行修改state的数据

import { ref, toRefs } from 'vue'
import { useStore, mapActions } from 'vuex'

const store = useStore()

function increment1() {
  store.dispatch('fetchDate', 20)
}

function increment2() {
  //可以在actions 使用promise来获取完成函数运行结束的时机
  store.dispatch('getFinishInfo', 20).then((res) => {
    console.log('执行成功')
  })
}
const { fetchDate: fetchDateFn } = mapActions(['fetchDate'])
const fetchDate = fetchDateFn.bind({ $store: store })
</script>

<style></style>
