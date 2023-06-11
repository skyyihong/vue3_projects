<template>
  not found count:{{ count }} params{{ $route.params }} query{{ $route.query }}

  <button @click="btnclick">click</button>
</template>

<script>
export default {
  computed: {},
  data() {
    return {
      name: '',
      count: 0,
    }
  },
  methods: {
    btnclick() {
      this.count++
    },
  },
  watch: {},
  mounted() {
    console.log('not found mounted')
  },
  unmounted() {
    console.log('unmounted not founded')
  },
}
</script>

<style scoped></style>
