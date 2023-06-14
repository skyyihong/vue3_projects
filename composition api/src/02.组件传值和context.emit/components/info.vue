<template>
  <h2>
    vue info component
    {{ myInfo.name }}
    {{ myInfo.age }}
    <button @click="clickbtn">click</button>
  </h2>
</template>

<script>
export default {
  name: 'info',
  emits: ['changeInfo'],
  props: {
    myInfo: {
      type: Object,
      default: () => {
        return { name: 'default', age: 10 }
      },
    },
  },
  setup(props, context) {
    const clickbtn = () => {
      context.emit('changeInfo', { name: 'javascript', age: 28 })
    }

    return { clickbtn }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  mixins: [],
  create() {
    //网络请求
    //this.watch监听数据
    //eventbus.on的监听
  },
  mounted() {
    //使用或操作dom
  },
  beforeupdate() {},
  updated() {},
  beforeumounte() {},
  unmounted() {},
}
</script>

<style scoped></style>
