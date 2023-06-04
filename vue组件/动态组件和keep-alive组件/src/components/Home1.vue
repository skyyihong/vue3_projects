<template>home components-keep-alive</template>

<script>
export default {
  name: 'Home1',
  computed: {},
  data() {
    return {
      name: '',
    }
  },
  methods: {},
  watch: {},
  mounted() {
    console.log('home1 mounted')
  },
  unmounted() {
    console.log('home1 unmounted')
  },
  deactivated() {
    console.log('home1 deactivated')
  },
  activated() {
    console.log('home1 activated')
  },
}
</script>

<style scoped></style>
