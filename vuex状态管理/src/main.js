import { createApp } from 'vue'
// import App from '@/1.state的使用/App'
// import App from '@/2.getters的使用/App'
// import App from '@/3.mutation的使用/App'
// import App from '@/4.actions的使用/App'
import App from '@/5.modules和命名空间的使用/App'
import store from '@/store'
createApp(App).use(store).mount('#app')
