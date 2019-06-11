// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import tool from '../tool/tool'
import axios from 'axios'
import echarts from 'echarts'

import 'font-awesome/css/font-awesome.css'

Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(tool)

// 时间过滤器
Vue.filter('timeff', function(value) {
  if (!value) return ''
  const time = value.toString()
  return `${time.slice(0, 4)}-${time.slice(4, 6)}-${time.slice(6, 8)}  ${time.slice(8, 10)}:${time.slice(10, 12)}:${time.slice(12, 14)}`
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
