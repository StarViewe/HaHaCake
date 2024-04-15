import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const pinia = createPinia()
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
let app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router).use(ElementPlus).use(pinia)
app.mount('#app')
