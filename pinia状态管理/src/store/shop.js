import { defineStore } from 'pinia'
import axios from 'axios'

const useShop = defineStore('shop', {
  state: () => ({
    name: 'bookshop',
  }),
  getters: {},
  actions: {
    //actions相当于组件的methods，将各种函数的对store的处理放置在这个对象里面
    async getWebContent() {
      const ret = await axios('http://123.207.32.32:8000/home/multidata')
      return ret
    },
  },
})

export default useShop
