<template>
  <div class="app">app component</div>
  <router-link to="/home">home</router-link>
  <hr />
  <router-link to="/page/123">page</router-link>
  <hr />
  <router-link to="/">root</router-link>
  <hr />

  <button @click="routerHomeClick">click》page</button>
  <hr />
  <router-link to="/shop">shop</router-link>
  <router-link to="/shop/it">IT</router-link>
  <hr />
  <router-link to="/shop/other">other</router-link>
  <hr />
  <button @click="removeOther">remove_other_component</button>
  <hr />
  <router-view></router-view>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { onMounted } from 'vue'

let otherRoute
const router = useRouter()
const route = useRoute()
function routerHomeClick() {
  router.push({
    path: '/page/111',
    query: { age: 18, name: 'hongyan' },
  })
}
function removeOther() {
  router.removeRoute('other') //删除动态路由时传入 对应路由的name即可
}

onMounted(() => {
  console.log('i am app')
  otherRoute = router.addRoute('shop', {
    //"shop"  为父级路由的name
    name: 'other',
    path: 'other',
    component: () => import('@/view/shop/components/other'),
  })
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
