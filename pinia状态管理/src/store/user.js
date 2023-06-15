import { defineStore } from 'pinia'
import useCounter from './counter'

const useUser = defineStore('user', {
  state() {
    return {
      name: 'hongyan',
      lastName: 'old',
      age: 18,
      hobby: 'playing pingpong',
      friend: {
        name: 'goose',
        height: 1.88,
        age: 28,
      },
      numName: [
        { id: 1, name: '11111' },
        { id: 2, name: '22222' },
        { id: 3, name: '33333' },
      ],
    }
  },
  getters: {
    fullName(state) {
      return state.name + ' ' + this.lastName //在getters里可以用state或this来获取整个实例
    },
    myFriend: (state) => {
      const counterStore = useCounter()
      return counterStore.name + ' ' + 'old' //使用其他store里的数据
    },

    findNumName(state) {
      return (id) => {
        //由于getter不能进行传参，可以返回一个函数，通过函数可以进行传参
        return this.numName.find((item) => {
          if (item['id'] === id) {
            return true
          }
        })
      }
    },
  },
})

export default useUser
