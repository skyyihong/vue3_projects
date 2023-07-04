import { computed } from 'vue'
import { mapState, useStore } from 'vuex'

export default function (mapList) {
  const store = useStore()
  const stateList = mapState(mapList)
  const newStateList = {}
  Object.keys(stateList).forEach((key) => {
    newStateList[key] = computed(stateList[key].bind({ $store: store }))
  })
  return newStateList
}
