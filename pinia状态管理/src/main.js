import { createApp } from 'vue'
// import App from '@/01.state_storeToRefs_$reset_$patch_$state内容学习/App'
import App from '@/03.actions同步和异步的使用/App'
import pinia from './store'

const app = createApp(App)
app.use(pinia)
app.mount('#app')
