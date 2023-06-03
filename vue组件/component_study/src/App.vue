<template>
  app vue
  <FatherComponent class="fatherapp">
    <!-- <template v-slot:father1="props">app给father1111111的插槽内容{{ props.myage }}</template> -->
    <template #father1="props">app给father1111111的插槽内容{{ props.myage }}</template>
  </FatherComponent>
</template>

<script>
import FatherComponent from '@/components/FatherComponet.vue'
export default {
  inheritAttrs: true,
  name: 'App',
  components: { FatherComponent },
  methods: {
    clickson() {
      console.log('app vue')
    },
  },
}
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
