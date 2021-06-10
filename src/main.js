import Vue from 'vue'

import 'normalize.css/normalize.css' // css样式初始化文件

import ElementUI from 'element-ui' // 导入element组件库
import 'element-ui/lib/theme-chalk/index.css' // 导入element组件样式
import locale from 'element-ui/lib/locale/lang/en' // 国际语言包

import '@/styles/index.scss' // 全局样式

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

// 使用英文语言
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false // 控制台终端输出提示文本

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
