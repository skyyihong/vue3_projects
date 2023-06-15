<template>
  <div>
    <h2>app component</h2>

    <!-- <father></father> -->
  </div>
</template>

<script setup>
import useShop from '@/store/shop'
const shopStore = useShop()
const ret = shopStore.getWebContent(111)

ret.then((res) => {
  console.log(res.data.data)
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
