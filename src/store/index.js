import Vue from 'vue'
import Vuex from 'vuex'

// // 一定要声明使用插件
Vue.use(Vuex)

/**
 * Vuex全局状态管理
 * @param options {Array} 用于渲染tabs的数组
 */

const store = new Vuex.Store({
  state: {
    BaseUrl: 'http://172.16.0.128:9902/fancybull-api', // 'http://172.16.0.67:8088/farmbackstage', ,
    rootArry: [], // 全局菜单
    options: [{
      name: '首页',
      route: '/main'
    }],
    activeIndex: '/mian',
    userInfo: '',
    menusList: [],
    islogin: false,
    token: ''

    // userInfo: {}
  },
  mutations: {
    // 获取用户信息
    get_userinfo(state, info) {
      state.userInfo = info.fzrlxdh
      state.token = info.token
      state.islogin = true
    },
    // 获取菜单列表
    get_menulist(state, list) {
      state.menusList = list
    },

    // 添加tabs
    add_tabs(state, data) {
      this.state.options.push(data)
      console.log(this.state.options)
    },
    // 删除tabs 传入路由值
    delete_tabs(state, route) {
      let index = 0
      // 算第几个tab被删除
      for (const option of state.options) {
        if (option.route === route) {
          break
        }
        index++
      }
      this.state.options.splice(index, 1)
    },
    // 设置当前激活的tab
    set_active_index(state, index) {
      this.state.activeIndex = index
    },
    // 设置详情信息
    save_detail_info(state, info) {
      this.state.userInfo = info
    }
  }
})

export default store
