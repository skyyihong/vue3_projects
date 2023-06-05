import { createApp } from 'vue'
import App from './App.vue'
import defaultMinx from '@/minix/default'
const app = createApp(App) //全局混入使用
app.mixin(defaultMinx)
app.mount('#app')
