<template>app compenont</template>

<script>
import { readonly, toRef, toRefs, triggerRef, shallowRef, reactive } from 'vue'

export default {
  name: 'App',
  components: {},
  setup() {
    //-------------------------------------------------------------------------------
    const info1 = shallowRef({
      name: 'hongyan',
      age: 18,
      hobby: {
        play: 'running',
      },
    })

    const changeHobby = () => {
      info1.value.hobby.play = 'basketball' //由于info1是shallowRef类型，修改里面值不会触发响应式更新
      console.log('basketball')
      triggerRef(info1) // 通过手动触发info1做更新。一般triggerRef是配合shallowRef一起使用
    }
    //-------------------------------------------------------------------------------
    const info2 = reactive({
      name: 'hongyan',
      age: 18,
      hobby: {
        play: 'running',
      },
    })
    var { name, age } = info2 //通过赋值结构，使info2的key都会失去响应式

    var { name, age } = toRefs(info2) //通过是toRefs，可以使所有的属性变成响应式
    var name = toRef(info2, 'name') //通过是toRef 可以其中name变成响应式
    return {
      info1,
      changeHobby,
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
