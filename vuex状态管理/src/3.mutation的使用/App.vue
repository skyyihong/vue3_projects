<template>
  <h3>{{ $store.state.counter }}</h3>
  <button @click="incremnet(10)">add10</button>
  <button @click="incremnet20(20)">add20</button>
  <button @click="$store.commit('incremnet', 30)">add30</button>
  //3.直接在页面调用mutation
</template>

<!-- <script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['incremnet']), //option API使用mapMutation
  },
}
</script> -->

<script setup>
//所有对state数据的修改都必须通过vuex的mutation进行操作，而且mutation不能执行异步函数
import { ref, toRefs } from 'vue'
import { useStore, mapMutations } from 'vuex'
const store = useStore()

const { incremnet: incremnetFn } = mapMutations(['incremnet']) //1.使用mapMutations来使用函数
const incremnet = incremnetFn.bind({ $store: store })

function incremnet20(num) {
  // 2.使用store.commit来调用mutation
  store.commit('incremnet', 20)
}
</script>

<style></style>
