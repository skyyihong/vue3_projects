<template>
  vue3 page component
  {{ count1 }}
  <br />
  <button @click="btnClick">click</button>
</template>

<script>
export default {
  emits: ['update:count1'],
  computed: {},
  props: ['count1'],
  data() {
    return {
      name: '',
    }
  },
  methods: {
    btnClick() {
      this.$emit('update:count1', this.count1 + 1)
    },
  },
  watch: {},
}
</script>

<style scoped></style>
