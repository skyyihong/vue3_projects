<template>
  <h1>app compenont</h1>
  <div>full name:{{ fullName1 }}</div>
  <button @click="changeName">changeFullName</button>
</template>

<script>
import { computed, ref } from 'vue'
export default {
  name: 'App',
  components: {},
  setup(props, context) {
    const firstName = ref('hong')
    const lastName = ref('yan')
    const fullName1 = computed({
      //以getter 和 setter完整的写法
      get() {
        return firstName.value + ' ' + lastName.value
      },
      set(newValue, oldValue) {
        const nameList = newValue.split(' ')
        firstName.value = nameList[0]
        lastName.value = nameList[1]
      },
    })
    const fullName = computed(() => {
      return firstName.value + ' ' + lastName.value
    })
    const changeName = () => {
      fullName1.value = 'hello world' //compute返回是一个ref的对象，修改它需要.value
    }
    return {
      fullName,
      fullName1,
      changeName,
    }
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
