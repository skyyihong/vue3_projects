<template>
  vue3 soncomponent

  <button @click="clickson(1)">clickson</button>
</template>

<script>
export default {
  // emits: ['clickson'],//添加数组说明，告诉父组件那个emit需要使用
  emits: {
    //自定义emit事件的验证，return为true/false
    clickson: (count) => {
      if (count === 1) {
        return true
      }
    },
  },
  //第一种：
  props: {
    age: {
      require: true,
      default: 0,
      type: Number,
    },
    info: {
      type: Object,
      default: () => ({}), //对象类型需要使用函数的返回值
    },
  },
  //第二种：
  // props: ['age', 'info'],

  computed: {},
  data() {
    return {
      name: '',
    }
  },
  methods: {
    clickson(count) {
      console.log('clickson')
      this.$emit('clickson', count)
    },
  },
  watch: {},
}
</script>

<style scoped></style>
