import { createStore } from 'vuex'
import userModule from './modules/user'

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
    incremnet(state, paylaod) {
      //payload为传递的参数
      state.counter = state.counter + paylaod
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
    //全局快捷方式获取其他模块数据的方法
    userMoney: (state) => state.user.money,
  },
  actions: {
    fetchDate(context, payload) {
      //context是一个用createStore 创建的实例拥有一样方法,payload为函数传递的参数
      setTimeout(() => {
        context.commit('incremnet', payload)
      }, 1000)
    },
    getFinishInfo(context, payload) {
      return new Promise((res) => {
        setTimeout(() => {
          context.commit('incremnet', payload)
          res('ok')
        }, 2000)
      })
    },
  },

  modules: {
    user: userModule,
  },
})
