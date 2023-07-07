export default {
  namespaced: true,
  state: () => ({
    name: 'hongyan',
    money: 1000,
    hobby: 'girl',
  }),
  getters: {
    doubleMoney(state, getters, rootState) {
      console.log('getters')
      return state.money * 2
    },
  },
  mutations: {
    earnMoney(state, payload) {
      state.money += payload
    },
  },
  actions: {
    earnMoneyActions(context, paylaod, rootState) {
      setTimeout(() => {
        context.commit('earnMoney', paylaod)
      }, 1000)
    },
  },
}
