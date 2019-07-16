import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 控制台
import main from '@/pages/control/main.vue'
const control_user = () => import('@/pages/control/control_user')
const safe_syslog = () => import('@/pages/control/safe_syslog')
const control_interface = () => import('@/pages/control/control_interface')
const data_datatotal = () => import('@/pages/control/data_datatotal')
const control_general = () => import('@/pages/control/control_general')
const control_product = () => import('@/pages/control/control_product')
const control_order = () => import('@/pages/control/control_order')

// const order_creat = () => import('@/pages/control/order_creat')
// const order_list = () => import('@/pages/control/order_list')
// import safe_password from '@/pages/control/safe_password'
// import safe_syslog from '@/pages/control/safe_syslog'
// import control_interface from '@/pages/control/control_interface'
// import data_datatotal from '@/pages/control/data_datatotal'
// import order_creat from '@/pages/control/order_creat'
// import order_list from '@/pages/control/order_list'

// 登录相关
import login from '@/pages/login/login.vue'
const register = () => import('@/pages/login/register.vue')
const repassword = () => import('@/pages/login/repassword.vue')
// import register from '@/pages/login/register.vue'
// import repassword from '@/pages/login/repassword.vue'

// 首页
import showindex from '@/pages/show/showindex.vue'
import showmain from '@/pages/show/showmain.vue'
const partner = () => import('@/pages/show/partner.vue')
const aboutus = () => import('@/pages/show/aboutus.vue')
// import partner from '@/pages/show/partner.vue'
// import aboutus from '@/pages/show/aboutus.vue'

// 产品
const safetyindex = () => import('@/pages/product/safetyindex.vue')
const photographing = () => import('@/pages/product/photographing.vue')
// import safetyindex from '@/pages/product/safetyindex.vue'
// import photographing from '@/pages/product/photographing.vue'
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
      path: '/login',
      component: login,
      name: 'login'
    },
    {
      path: '/register',
      component: register,
      name: '注册'
    },
    {
      path: '/repassword',
      component: repassword,
      name: '忘记密码'
    },
    // 展示首页
    {
      path: '/showindex',
      component: showindex,
      name: 'showindex',
      children: [{
        path: '/showmain',
        component: showmain,
        name: '主页'
      }, {
        path: '/safetyindex',
        component: safetyindex,
        name: '平安指数'
      },
      {
        path: '/photographing',
        component: photographing,
        name: '拍拍采'
      }, {
        path: '/partner',
        component: partner,
        name: '合作伙伴'
      },
      {
        path: '/aboutus',
        component: aboutus,
        name: '关于我们'
      }
      ]
    },
    // {
    //   path: '/',
    //   component: HelloWorld,
    //   name: 'HelloWorld',
    //   children: [{
    //     path: '/main',
    //     component: main,
    //     name: '控制台首页'
    //   }]
    // },
    {
      path: '/',
      component: HelloWorld,
      name: 'HelloWorld',
      children: [{
        path: '/safe_syslog',
        component: safe_syslog,
        name: '系统日志'
      }, {
        path: '/control_user',
        component: control_user,
        name: '用户信息'
      }]
    },
    {
      path: '/',
      component: HelloWorld,
      name: 'HelloWorld',
      children: [{
        path: '/control_interface',
        component: control_interface,
        name: '接口管理'
      }]
    },
    {
      path: '/',
      component: HelloWorld,
      name: 'HelloWorld',
      children: [{
        path: '/control_general',
        component: control_general,
        name: '概况'
      }]
    },
    {
      path: '/',
      component: HelloWorld,
      name: 'HelloWorld',
      children: [{
        path: '/control_product',
        component: control_product,
        name: '服务产品'
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
        path: '/control_order',
        component: control_order,
        name: '创建工单'
      }
      // {
      //   path: '/order_list',
      //   component: order_list,
      //   name: '工单列表'
      // }
      ]
    }
  ]
})
