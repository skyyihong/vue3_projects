<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ name }}</h1>
    <h1><button @click="btnCLick">click</button></h1>
  </div>
</template>

<script>
import eventbus from '@/utils/eventbus'
export default {
  name: 'HelloWorld',
  data() {
    return {
      name: 'HelloWorld',
    }
  },
  props: {
    msg: String,
  },
  methods: {
    btnCLick() {
      eventbus.emit('click', 18) //发出事件调用
      console.log(this.$el)
      console.log(this.$parent)
      console.log(this.$root.$el)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
