<template>
  <div>
    <h3>app compenont</h3>
    <h3>message:{{ message }}</h3>
    <h3>acount:{{ account.name }}</h3>
    <h3>acount:{{ account.age }}</h3>
    <h3>info:{{ info.name }}</h3>
    <button @click="btnclick">btnclick</button>
  </div>
</template>

<script>
import { ref, reactive, nextTick } from 'vue'
export default {
  name: 'App',
  components: {},
  setup(props) {
    const message = ref('hello world')
    const info = ref({
      name: 'abc',
      num: 18,
    })
    const account = reactive({ name: 'hongyan', age: 18 }) //一般只有对数据内部之间有联系时，才使用reative。其他多数情况一般使用ref
    const btnclick = () => {
      message.value = 'hongyanaaaaa'
    }
    console.log(info.value.name)
    return { message, btnclick, account, info }
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
