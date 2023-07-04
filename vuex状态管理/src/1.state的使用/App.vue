<template>
  <h3>{{ $store.state.counter }}</h3>
  <h3>myCounter1为响应式:{{ myCounter1 }}</h3>
  <h3>myCounter2不是响应式:{{ myCounter2 }}</h3>
  <h3>counter1:{{ counter1 }}</h3>
  <h3>{{ age }}+{{ name }}+{{ hobby }}</h3>
  <button @click="incremnet">+2</button>
</template>

<!-- <script>
// 在option API中使用computed加mapState来获取state的内容
import { mapState } from 'vuex'
export default {
  data() {
    return {
      myCounter2: this.$store.state.counter,
    }
  },
  computed: {
    ...mapState(['counter']),
    myCounter1() {
      return this.$store.state.counter
    },
  },
  methods: {
    incremnet() {
      this.$store.commit('incremnet', 2)
    },
  },
}
</script> -->

<script setup>
import { ref, toRefs, proxyRefs, computed } from 'vue'
import { useStore, mapState } from 'vuex'
import stateList from '@/hook/setupMapstate'

const store = useStore()

const { counter: myCounter1 } = toRefs(store.state) //1.结构时将state里面的counter赋予myCounter1变量
let myCounter2 = ref(store.state.counter) //store.state.counter获取到数据已经是一个字面量，再ref也是没有效果的

function incremnet() {
  store.commit('incremnet', 2)
}
const { counter1: counter1fn } = mapState(['counter1']) //2.通过是mapState函数获得,并用computed进行结构
const counter1 = computed(counter1fn.bind({ $store: store }))
const { name, age, hobby } = stateList(['name', 'age', 'hobby'])
</script>

<style></style>
