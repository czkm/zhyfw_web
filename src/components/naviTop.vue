<template>
  <div id="searchBar" :class="{ isover_top:searchBarFixed == true }" class="navi_top  " >
    <!-- :class="{ isover_top:searchBarFixed == true }" -->
    <div class="fl index_icon">
      <img class="imgsty" src="../assets/indexlogo.png" alt="">
    </div>
    <div class="fr index_navigate">
      <div class="navi_item fl" @click="gotolink('main')">控制台</div>
      <div class="navi_item fl" @click="gotolink('login')">登录</div>
      <div class="navi_item fl" @click="gotolink('register')">免费注册</div>
    </div>
    <!-- 导航相关 -->
    <div class="navi_main">
      <el-dropdown
        :class="{ navi_main_item_hover: activeIndex=='showmain' }"
        trigger="click"
        class="navi_main_item fl"
        style="margin-left: 40px;"
        @click.native="gotolink('showmain')" >
        <span>
          产品
          <!-- <i class="el-icon-arrow-down el-icon--right"/> -->
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="gotolink('photographing')">拍拍采</el-dropdown-item>
          <el-dropdown-item @click.native="gotolink('shafetyindex')">平安指数</el-dropdown-item>
          <el-dropdown-item @click.native="gotolink('showmain')">随便采</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div
        :class="{ navi_main_item_hover: activeIndex=='partner' }"
        class="navi_main_item fl"
        @click="gotolink('partner')">合作伙伴</div>
      <div
        :class="{ navi_main_item_hover: activeIndex=='aboutus' }"
        class="navi_main_item fl"
        @click="gotolink('aboutus')">关于神牛</div>
    </div>

  </div>

</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  data() {
    return {
      isShow: false,
      searchBarFixed: false,
      activeIndex: this.$route.path
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    showdetail() {
      this.isShow = true
    },
    closeetail() {
      this.isShow = false
    },
    // 路由跳转
    gotolink(res) {
      console.log(res)
      this.activeIndex = `${res}`
      this.$router.replace({ path: `/${res}` })
    },
    // 滚动监听
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      var offsetTop = document.querySelector('#searchBar').offsetTop
      if (scrollTop > offsetTop + 50) {
        this.searchBarFixed = true
      } else {
        this.searchBarFixed = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.isover_top {
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 99;
  filter: Alpha(opacity=50);
}
.navi_top {
  width: 100%;
  height: 65px;
  background-color: white;
  .index_icon {
    width: 120px;
    height: 45px;
    margin: 10px auto;
    margin-left: 30px;
    // background-color: brown;
  }
  .index_navigate {
    margin-right: 50px;
    width: 290px;
    // background-color: cadetblue;
    .navi_item {
      margin: 0 8px auto;
      // background-color: beige;
      width: 80px;
      height: 65px;
      text-align: center;
      line-height: 65px;
    }
    .navi_item:hover {
      cursor: pointer;
      color: rgb(15, 159, 226);
      border-bottom: 1px solid rebeccapurple;
    }
  }
  //导航条
  .navi_main {
    position: absolute;
    top: 65px;
    height: 45px;
    width: 100%;
    background-color: black;
    // margin-left: 30px;
    // background-color: violet;
    .navi_main_item {
      width: 80px;
      height: 45px;
      margin: 0 10px;
      color: azure;
      font-size: 16px;
      line-height: 45px;
      text-align: center;
      cursor: pointer;
    }
    .navi_main_item_hover {
      color: rgb(87, 144, 219);
    }
  }
  .detail_main {
    position: absolute;
    top: 105px;
    margin-left: 10px;
    width: 60px;
    height: 210px;
    background-color: bisque;
    .detail_item {
      width: 60px;
      height: 50px;
      margin: 10px 0 auto;
      background-color: cadetblue;
    }
  }
}
</style>
