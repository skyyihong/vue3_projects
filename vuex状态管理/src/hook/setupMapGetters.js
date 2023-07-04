import { computed } from 'vue'
import { mapGetters, useStore } from 'vuex'

export default function (mapList) {
  const store = useStore()
  const gettersList = mapGetters(mapList)
  const newGettersList = {}
  Object.keys(gettersList).forEach((key) => {
    newGettersList[key] = computed(gettersList[key].bind({ $store: store }))
  })
  return newGettersList
}
