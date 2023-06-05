<template>
  <div class="fatherroot">
    father 组件自己的内容
    <hr />
    <slot> 我是father默认插槽内容</slot>
    <hr />
    <slot name="father1" myage="18">我是father1默认插槽内容</slot>
    <hr />
    <sonComponent
      :age="18"
      :info="{ name: 'hy', age: '18' }"
      @clickson="clickson($event)"
    ></sonComponent>
    //$event 为emit传过来的参数
  </div>
</template>

<script>
import sonComponent from './sonComponent.vue'
export default {
  inheritAttrs: true,
  components: {
    sonComponent,
  },
  computed: {},
  data() {
    return {
      name: '',
      age: 18,
    }
  },
  methods: {
    clickson(event) {
      console.log('father vue', event)
    },
  },
  watch: {},
}
</script>

<style scoped>
.fatherapp {
  color: red;
}
</style>
