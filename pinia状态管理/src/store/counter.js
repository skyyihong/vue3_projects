import { defineStore } from 'pinia'

const useCounter = defineStore('counter', {
  state: () => ({
    count: 99,
    name: 'hongyan',
    age: 18,
    friend: 'coderwhy',
  }),
  getters: {},
  actions: {},
})

export default useCounter
