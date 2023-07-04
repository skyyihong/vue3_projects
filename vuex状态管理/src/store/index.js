import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      counter: 999,
      counter1: 888,
      name: 'hongyan',
      age: 18,
      hobby: 'nba',
    }
  },
  mutations: {
    incremnet(state, step) {
      state.counter = state.counter + step
    },
  },
  getters: {
    doubleCounter1(state, getters) {
      //getters可以接受两个参数，不能接受参数过来
      return state.counter * 2
    },
    tripleCounter(state, getters) {
      //getters可以接受两个参数，不能接受参数过来
      return state.counter * 3
    },
    incremnetNum(state, getters) {
      //通过返回一个函数进行传参
      return (num) => {
        return state.counter + num
      }
    },
  },
})
