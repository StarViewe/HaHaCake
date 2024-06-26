import { createApp } from 'vue'
import router from './router'
import pinia from './store'
import './style.css'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import ECharts from 'vue-echarts'
import 'echarts'

let app = createApp(App).component('ECharts',ECharts)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
console.log(import.meta.env)
app.use(router).use(ElementPlus).use(pinia)

app.mount('#app')
