import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { UserConfigExport,ConfigEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/
export default defineConfig(({command})=>{
  return{
  plugins: [
    vue(),
    viteMockServe({
      localEnabled: command === 'serve',
    }),
  ],
  resolve:{
  alias:{
      "@":path.resolve("./src")//相对路径别名配置，用@代替src
    }
  }
  }
})