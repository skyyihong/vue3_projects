<template>
  <h3>获取moduel里User的name:{{ $store.state.user.name }}</h3>
  <h3>获取moduel里User的money:{{ $store.state.user.money }}</h3>
  <h3>获取moduel里User的getters:{{ $store.getters['user/doubleMoney'] }}</h3>
  <button @click="clickMuation">money+100(mutation)</button>
  <button @click="$store.commit('user/earnMoney', 200)">money+200(mutation)</button>
  <button @click="clickAction">money+10(actions)</button>
  <button @click="$store.dispatch('user/earnMoneyActions', 20)">money+20(actions)</button>
  <h3>使用createNamespacedHelpers获取的对应mapxxx函数:{{ hobby1 }}</h3>
  <h3>通过全局getters获取是user的money:{{ $store.getters.userMoney }}</h3>
</template>

<!-- <script>
import { createNamespacedHelpers } from 'vuex'
const { mapState: mapStateUser } = createNamespacedHelpers('user')
export default {
  methods: {},
  computed: {
    ...mapStateUser(['hobby']),
  },
}
</script> -->

<script setup>
import { callWithErrorHandling, ref, toRefs } from 'vue'
import { useStore, createNamespacedHelpers } from 'vuex'

// 在modules中,默认使用只有state会分配是各个的moduel里面，即需要$store.state.模块名.state名 进行获取
// 在modules中,getters mutation actions 默认是合并到全局的store里面，所以调用这个三个只须$store.dispatch() $store.commit() $store.getters.xxx
// 如果getters mutation actions需要隔离，属于在module模块里启用 namespaced:true
// store.commit('模块名/函数', payload) store.dispatch('模块名/函数', payload)，store.getters['模块名/函数']
//模块里是可以获取其他模块或根vuex的数据
//根getters可以做为全局访问其他state的快捷方式

const store = useStore()
function clickMuation() {
  store.commit('user/earnMoney', 100)
}
function clickAction() {
  store.dispatch('user/earnMoneyActions', 10)
}

const { hobby: hobby1 } = toRefs(store.state.user) //1.通过torefs拿到user的state
console.log(store.getters['user/doubleMoney']) //示范获取getters模块内数据
</script>

<style></style>
