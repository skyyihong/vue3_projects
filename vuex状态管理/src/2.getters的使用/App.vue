<template>
  <h3>页面直接使用getter内容:{{ $store.getters.doubleCounter1 }}</h3>
  <h3>reRefs 获取到getter内容:{{ doubleCounter1 }}</h3>
  <h3>传参使用getter {{ incremnetNum(11) }}</h3>
  <h3>setup函数里使用mapGetters获取{{ tripleCounter }}</h3>
  <h3>hook函数使用方式:{{ tripleCounter1 }}</h3>
  <button @click="$store.commit('incremnet', 10)">+10</button>
</template>

<!-- <script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['doubleCounter']),
  },
}
</script> -->

<script setup>
//getters的功能相对与computed，对state的内容进行获取后进行处理返回
import { ref, toRefs, computed } from 'vue'
import { useStore, mapGetters } from 'vuex'
import setupMapGetters from '@/hook/setupMapGetters'
const store = useStore()
const { doubleCounter1, incremnetNum } = toRefs(store.getters) //1.使用reRef获取getter

const { tripleCounter: tripleCounterFn } = mapGetters(['tripleCounter']) //2.使用mapGetters来获取内容
const tripleCounter = computed(tripleCounterFn.bind({ $store: store }))
const { tripleCounter: tripleCounter1 } = setupMapGetters(['tripleCounter'])
</script>

<style></style>
