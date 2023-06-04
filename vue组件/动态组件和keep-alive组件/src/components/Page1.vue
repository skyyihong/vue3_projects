<template>page component-keep-alive</template>

<script>
export default {
  name: 'Page1',
  computed: {},
  data() {
    return {
      name: '',
    }
  },
  methods: {},
  watch: {},
  mounted() {
    console.log('page1 mounted')
  },
  unmounted() {
    console.log('page1 unmounted')
  },
  deactivated() {
    console.log('page1 deactivated')
  },
  activated() {
    console.log('page1 activated')
  },
}
</script>

<style scoped></style>
