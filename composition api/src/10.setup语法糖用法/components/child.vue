<template>
  <div>
    <h2>vue chlid component</h2>
    age:{{ age }}

    <button @click="ChageAge">childClick</button>
  </div>
</template>

<script setup>
/*
defineExpose、defineProps 和 defineEmits 都是只能在 <script setup> 中使用的编译器宏。
他们不需要导入，且会随着 <script setup> 的处理过程一同被编译掉。
*/

defineProps({
  //无需import进来，只需使用这个函数来定义需要接受的props
  age: {
    type: Number,
    default: 20,
  },
})
const emits = defineEmits(['changeAge']) //无需import，使用defineEmits定义要emit的名字，函数返回值为emit对象
const ChageAge = () => {
  emits('changeAge', 22) //从defineEmits获取返回值，然后调用需要emit的内容
}
const foo = () => {
  console.log('foo function running')
}
defineExpose({ foo }) //默认setup里面的函数和变量是不可以给其他获取组件来调用，如果想把组件内部函数和变量给其他组件调用，需要使用defineExpose暴露出去
</script>

<style scoped></style>
