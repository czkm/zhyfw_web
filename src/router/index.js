import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import main from '@/pages/main.vue'
import safe_password from '@/pages/safe_password'
import safe_syslog from '@/pages/safe_syslog'
import event_interface from '@/pages/event_interface'
import data_datatotal from '@/pages/data_datatotal'
import order_creat from '@/pages/order_creat'
import order_list from '@/pages/order_list'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      redirect: '/main',
      component: HelloWorld,
      name: 'HelloWorld',
      children: [{
        path: '/main',
        component: main,
        name: '首页'
      }]
    },
    {
      path: '/',
      component: HelloWorld,
      name: 'HelloWorld',
      children: [{
        path: '/safe_password',
        component: safe_password,
        name: '更换密码'
      }, {
        path: '/safe_syslog',
        component: safe_syslog,
        name: '系统日志'
      }]
    },
    {
      path: '/',
      component: HelloWorld,
      name: 'HelloWorld',
      children: [{
        path: '/event_interface',
        component: event_interface,
        name: '接口管理'
      }]
    },
    {
      path: '/',
      component: HelloWorld,
      name: 'UserCenter',
      children: [{
        path: '/data_datatotal',
        component: data_datatotal,
        name: '数据统计'
      }]
    },
    {
      path: '/',
      component: HelloWorld,
      name: 'HelloWorld',
      children: [{
        path: '/order_creat',
        component: order_creat,
        name: '创建工单'
      }, {
        path: '/order_list',
        component: order_list,
        name: '工单列表'
      }]
    }
  ]
})
