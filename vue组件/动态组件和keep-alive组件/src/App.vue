<template>
  <button @click="btnClick">click</button>
  <div>
    <!-- 方法一： -->
    <Home v-if="componentIndex"></Home>
    <Page v-else></Page>
    <hr />
    <!-- 方法二： -->
    <!-- 用component组件的is属性来确定显示那个具体组件 -->
    <component :is="componentlists[componentIndex]"></component>
    <hr />
    <hr />
    <!-- 使用keep-alive标签包括是内容取消显示时不会销毁组件，
    同时对组件提高activated,deactivated方法来获取组件显示和隐藏的事件
    同时include属性可以用来指定那些需要保持keepalive，那些不需要保存keepalive可以销毁的组件
    include="Home1,Home2,Page,Page2" 字符串表示方式
    :include="['Home1'] 数组表示方式，注意如果是数组表示要用 v-bind:include 方式，属性方式无法识别数组
    Home1为组件里属性name里定义的名称
     -->
    <!-- <keep-alive :include="['Home1']> -->
    <keep-alive include="Home1">
      <component :is="componentlists1[componentIndex]"></component>
    </keep-alive>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import Page from './components/Page.vue'
import Home1 from './components/Home1.vue'
import Page1 from './components/Page1.vue'
export default {
  name: 'App',
  components: {
    Home,
    Page,
    Home1,
    Page1,
  },
  data() {
    return {
      componentlists: ['Home', 'Page'],
      componentlists1: ['Home1', 'Page1'],
      componentIndex: 0,
    }
  },
  methods: {
    btnClick() {
      this.componentIndex = ++this.componentIndex % 2
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
