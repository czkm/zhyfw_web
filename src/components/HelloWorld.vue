<template lang="html">
  <el-row class="container">
    <el-col :span="24" class="header">
      <el-col :span="10" :class="collapsed?'logo-collapse-width':'logo-width'" class="logo">
        <div :class="{'active_top_icon':collapsed}" class="top_icon fl" ><img class="imgsty" src="../assets/logo.png" alt=""> </div>
        <!-- <img style="width:60px;margin: 0 atuo" src="../assets/logo.png" alt=""> -->
        {{ collapsed?'':sysName }}
      </el-col>
      <el-col :span="1">
        <div class="tools" @click.prevent="collapseFun">
          <i v-if="collapsed" class="fa el-icon-caret-right"/>
          <i v-else class="fa el-icon-caret-left"/>    <!-- 《《 箭头 -->
        </div>
      </el-col>

      <!-- <el-col :span="5">
        {{ sysTitle }}
      </el-col> -->
      <!-- 用户操作组 -->
      <el-col :span="4" class="userinfo">
        <el-dropdown :span="2" trigger="hover">
          <span class="el-dropdown-link userinfo-inner"><img :src="sysUserAvatar" class="userimg" > {{ sysUserName }}</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item @click.native="useroption()">设置</el-dropdown-item>
            <el-dropdown-item divided @click.native="logout()">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>

    <el-col :span="24" class="main">
      <aside :class="collapsed?'menu-collapsed':'menu-expanded'" class="el-col-6">

        <!--左侧导航菜单-->

        <el-menu :collapse="collapsed" :unique-opened ="true" :router ="true" :default-active="$route.path" >
          <el-menu-item v-for="child1 in menuList" v-if="!child1.children" :index="'/'+child1.location" :key="child1.id">
            <i :class="child1.iconCls" style="font-size: 16px;"/>
            <span slot="title">{{ child1.title }}</span>
          </el-menu-item>

          <!-- 1级菜单 -有子节点-->
          <el-submenu v-for="child1 in menuList" v-if="child1.children" :index="'/'+child1.location" :key="child1.id">
            <!-- 2级菜单 无子节点-->
            <el-menu-item v-for="child2 in child1.children" v-if="!child2.children" :index="'/'+child2.location" :key="child2.id" class="menuTwo">
              <i :class="child2.iconCls"/>
              {{ child2.title }}
            </el-menu-item>
            <template v-if="child1.children" slot="title">
              <i :class="child1.iconCls"/>
              <span slot="title">{{ child1.title }}</span>
            </template>

            <!-- 判断二级 有子节点  -->
            <el-submenu v-for="child2 in child1.children" v-if="child2.children" :index="'/'+child2.location" :key="child2.id" class="menuTwo">
              <template slot="title">
                <div>
                  <i :class="child2.iconCls"/>
                  <span slot="title">{{ child2.title }}</span>
                </div>
              </template>
              <!-- 三级菜单     -->
              <el-menu-item-group >
                <el-menu-item v-for="child3 in child2.children" v-if="!child3.children" :index="'/'+child3.location" :key="child3.id" class="menuThree"><i :class="child3.iconCls">{{ child3.title }}</i></el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-submenu>
        </el-menu>

      </aside>

      <section class="content-container">
        <div class="grid-content bg-purple-light">
          <el-col :span="24" class="breadcrumb-container">
            <el-tabs
              v-if="options.length"
              v-model="activeIndex"
              type="card"
              closable
              @tab-click="tabClick"
              @tab-remove="tabRemove">
              <!-- eslint-disable vue/no-unused-vars -->
              <el-tab-pane
                v-for="(item, index) in options"
                :key="item.name"
                :label="item.name"
                :name="item.route"/>
            </el-tabs>
          </el-col>

          <el-col :span="24" :class="{'shadow':$route.path!=='/data_datatotal'}" class="content-wrapper ">
            <transition name="fade" mode="out-in">
              <router-view/>
            </transition>
          </el-col>
        </div>
      </section>
      <!-- 用户设置操作dialog -->
      <el-dialog
        :visible.sync="Editdiolog"
        title="用户信息"
        width="30%"
        center>
        <el-form :model="optionform">
          <el-form-item label="用户头像">
            <div style = "text-align:center">
              <img :src="sysUserAvatar" class="formuserimg" >
              <el-button type="primary" @click="Changeimg()">上传头像</el-button>
            </div>
          </el-form-item>
          <el-form-item :label-width="formLabelWidth" label="用户名">
            <el-input v-model="optionform.username"/>
          </el-form-item>
          <el-form-item :label-width="formLabelWidth" label="邮箱">
            <el-input v-model="optionform.useremail"/>
          </el-form-item>
          <el-form-item :label-width="formLabelWidth" label="旧密码">
            <el-input v-model="optionform.oldpassw"/>
          </el-form-item>
          <el-form-item :label-width="formLabelWidth" label="新密码">
            <el-input v-model="optionform.passw"/>
          </el-form-item>
          <el-form-item :label-width="formLabelWidth" label="确认密码">
            <el-input v-model="optionform.confirmpassw"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="Changeoption()">提交修改</el-button>
            <el-button @click="Editdiolog = false">取消</el-button>
          </el-form-item>
        </el-form>

      </el-dialog>
      <!-- ----------------------- -->
    </el-col>
  </el-row>

</template>

<script>
export default {
  data() {
    return {
      sysUserAvatar:
        'https://y.gtimg.cn/music/photo_new/T001R300x300M000002eEEYT4ACDdX.jpg',
      sysName: '智慧云服务',
      QueryUrl: this.$store.state.BaseUrl,
      sysTitle: '1213',
      sysUserName: 'admin', // 用户名
      collapsed: false,
      rootArry: this.$store.state.rootArry,
      Editdiolog: false, // 编辑框
      formLabelWidth: '80px',
      optionform: {},

      menuList: [
        {
          title: '首页',
          location: 'main',
          iconCls: 'fa fa-camera-retro'
        },
        {
          title: '安全中心',
          location: 'safeManage',
          iconCls: 'fa fa-id-card-o',
          children: [
            {
              title: '密码修改',
              location: 'safe_password',
              iconCls: 'fa fa-cloud-upload'
            },
            {
              title: '系统日志',
              location: 'safe_syslog',
              iconCls: 'fa fa-cubes'
            }
          ]
        },
        {
          title: '业务管理',
          location: 'eventManage',
          iconCls: 'fa fa-eur',
          children: [
            {
              title: '接口管理',
              location: 'event_interface',
              iconCls: 'fa fa-square-o'
            }
          ]
        },
        {
          title: '数据统计',
          location: 'dataManage',
          iconCls: 'fa fa-id-card-o',
          children: [
            {
              title: '数据统计',
              location: 'data_datatotal',
              iconCls: 'fa fa-file-powerpoint-o'
            }
          ]
        },
        {
          title: '工单管理',
          location: 'orderManage',
          iconCls: 'fa fa-id-card-o',
          children: [
            {
              title: '创建工单',
              location: 'order_creat',
              iconCls: 'fa fa-braille'
            },
            {
              title: '工单列表',
              location: 'order_list',
              iconCls: 'fa fa-deafness '
            }
          ]
        }
      ]
    }
  },
  computed: {
    options() {
      return this.$store.state.options
    },
    activeIndex: {
      get() {
        return this.$store.state.activeIndex
      },
      set(val) {
        this.$store.commit('set_active_index', val)
      }
    }
  },
  watch: {
    $route(to) {
      let flag = false
      for (const option of this.options) {
        if (option.name === to.name) {
          flag = true
          this.$store.commit('set_active_index', '/' + to.path.split('/')[1])
          break
        }
      }
      if (!flag) {
        this.$store.commit('add_tabs', {
          route: '/' + to.path.split('/')[1],
          name: to.name
        })
        this.$store.commit('set_active_index', '/' + to.path.split('/')[1])
      }
    }
  },

  mounted() {
    // const userneme = this.getCookie('sjhm')
    // if (userneme) {
    //   this.sysUserName = userneme || ''
    // }
    this.optionMeun()
  },
  methods: {
    // 配置菜单
    optionMeun() {
      // 判断菜单是否有值
      if (this.rootArry.length) {
        console.log('菜单有值')
        this.menuList = this.rootArry
      } else {
        console.log('无值')
      }
    },
    // 折叠导航栏
    collapseFun: function() {
      this.collapsed = !this.collapsed
    },
    showMenu(i, status) {
      this.$refs.menuCollapsed.getElementsByClassName(
        'submenu-hook-' + i
      )[0].style.display = status ? 'block' : 'none'
    },
    // 退出登录
    logout: function() {},
    // tab切换时，动态的切换路由
    tabClick(tab) {
      const path = this.activeIndex
      // 用户详情页的时候，对应了二级路由，需要拼接添加第二级路由
      // if (this.activeIndex === '/userInfo') {
      //   path = this.activeIndex + '/' + this.$store.state.userInfo.name
      // }
      this.$router.push({ path: path })
    },
    tabRemove(targetName) {
      // 首页不可删除
      console.log(targetName)

      if (targetName === '/main') {
        return
      }
      this.$store.commit('delete_tabs', targetName)
      if (this.activeIndex === targetName) {
        // 设置当前激活的路由
        if (this.options && this.options.length >= 1) {
          this.$store.commit(
            'set_active_index',
            this.options[this.options.length - 1].route
          )
          this.$router.push({ path: this.activeIndex })
        } else {
          this.$router.push({ path: '/main' })
        }
      }
    },
    // 打开用户设置
    useroption() {
      this.Editdiolog = true
    },
    // 用户头像上传
    Changeimg() {},
    // 提交用户更改信息
    Changeoption() {}
  }
}
</script>

<style scoped lang="scss">
.container {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  .header {
    height: 60px;
    line-height: 60px;
    background: #2c66a1;
    color: #fff;
    .usericon {
      width: 60px;
      height: 60px;
      // background-color: #475669
    }
    .top_icon {
      width: 64px;
      // height: 40px;
      margin: 14px auto;
    }
    .userimg {
      width: 40px;
      height: 40px;
      border-radius: 20px;
      margin: 10px 0px 10px 10px;
      float: left;
    }
    .userinfo {
      text-align: center;
      padding-right: 35px;
      float: right;
      .userinfo-inner {
        cursor: pointer;
        color: #fff;
      }
    }
    .logo {
      height: 60px;
      font-size: 22px;
      // padding-left: 20px;
      // padding-right: 20px;
      border-color: rgba(238, 241, 146, 0.3);
      border-right-width: 1px;
      border-right-style: solid;
    }
    .logo-width {
      width: 230px;
    }
    .logo-collapse-width {
      width: 64px;
    }

    .tools {
      padding: 0 23px;
      width: 14px;
      height: 60px;
      line-height: 60px;
      cursor: pointer;
    }
  }
  .main {
    display: flex;
    position: absolute;
    top: 60px;
    bottom: 0;
    overflow: hidden;
    .formuserimg {
      width: 100px;
      height: 100px;
      border-radius: 100px;

      margin: 0 auto;
    }
    aside {
      flex: 0 0 230px;
      width: 230px;
      .el-menu {
        height: 100%;
      }
      .collapsed {
        width: 60px;
        .item {
          position: relative;
        }
        .submenu {
          position: absolute;
          top: 0;
          left: 60px;
          z-index: 99999;
          height: auto;
          display: none;
        }
      }
    }
    .menu-collapsed {
      flex: 0 0 60px;
      width: 60px;
    }
    .menu-expanded {
      flex: 0 0 230px;
      width: 230px;
    }
    .content-container {
      flex: 1;
      overflow-y: scroll;
      padding: 0 20px 20px 20px;
      .breadcrumb-container {
        background-color: #fff;
        .title {
          width: 200px;
          float: left;
          color: #475669;
        }
        .breadcrumb-inner {
          float: right;
        }
      }

      .content-wrapper {
        background-color: #fff;
        box-sizing: border-box;
      }
    }
  }
  .el-pagination {
    text-align: center;
  }
}
</style>
