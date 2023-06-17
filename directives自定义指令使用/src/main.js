import { createApp } from 'vue'
import App from './App.vue'
import directives from '@/directives'

const app = createApp(App)
app.directive('focus', directives)
app.mount('#app')
