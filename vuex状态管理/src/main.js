import { createApp } from 'vue'
// import App from '@/1.state的使用/App'
// import App from '@/2.getters的使用/App'
import App from '@/3.mutation的使用/App'
import store from '@/store'
createApp(App).use(store).mount('#app')
