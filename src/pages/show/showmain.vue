<template>
  <div class="">
    <div class="showindex_topbg">
      <img class="imgsty" src="../../assets/showindex/index1.png" alt="">
      <div class="absolut_box">
        <div class="absoult_title wcolor">看看采</div>
        <div class="absoult_info wcolor">努力打造ai时代，让世界看起来更简单</div>
        <el-button class="absoult_btn" plain @click="gotolink('photographing')" >了解详情 </el-button>
      </div>
    </div>

    <!-- card展示 -->
    <div class="card_main">
      <div class="card_main_box">
        <el-card class="card_box fl" shadow="hover">
          <div class="card_title">拍拍采</div>
          <div class="card_info">可视化智能访查系统（拍拍采）采用先进的计算机视觉技术，为“一标三实”信息采集提供人工智能新途径，整个采集过程只要“拍拍拍”，无需人工录入，全程自动识别，采集入库，大大提高了访查效率。</div>
        </el-card>
        <el-card class="card_box fl" shadow="hover">
          <div class="card_title">看看采</div>
          <div class="card_info">可视化智能访查系统（拍拍采）采用先进的计算机视觉技术，为“一标三实”信息采集提供人工智能新途径，整个采集过程只要“拍拍拍”，无需人工录入，全程自动识别，采集入库，大大提高了访查效率。</div>
        </el-card>
        <el-card class="card_box fl" shadow="hover">
          <div class="card_title">平安指数</div>
          <div class="card_info">可视化智能访查系统（拍拍采）采用先进的计算机视觉技术，为“一标三实”信息采集提供人工智能新途径，整个采集过程只要“拍拍拍”，无需人工录入，全程自动识别，采集入库，大大提高了访查效率。</div>
        </el-card>
        <el-card class="card_box fl" shadow="hover">
          <div class="card_title">出租房屋小程序</div>
          <div class="card_info">可视化智能访查系统（拍拍采）采用先进的计算机视觉技术，为“一标三实”信息采集提供人工智能新途径，整个采集过程只要“拍拍拍”，无需人工录入，全程自动识别，采集入库，大大提高了访查效率。</div>
        </el-card>
      </div>
    </div>
    <div class="showindex_topbg">
      <img class="imgsty" src="../../assets/showindex/index2.png" alt="">
    </div>
    <div class="card_main_class">
      <img class="imgsty" src="../../assets/showindex/index3.png" alt="">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  data() {
    return {}
  },
  methods: {
    gotolink(res) {
      console.log(res)
      this.$router.replace({ path: `/${res}` })
    }
  }
}
</script>

<style lang="scss" scoped  >
.wcolor {
  color: white;
}
.showindex {
  width: 100%;
  // background-color: aquamarine;
  .showindex_topbg {
    height: 500px;
    position: relative;
    .absolut_box {
      position: absolute;
      top: 200px;
      left: 100px;
      height: 200px;
      width: 300px;
      // background-color: darkcyan;
      .absoult_title {
        font-size: 24px;
        text-align: center;
      }
      .absoult_info {
        font-size: 16px;
        margin: 10px auto;
        text-align: center;
        line-height: 25px;
      }
      .absoult_btn {
        width: 150px;
        height: 40px;
        margin-top: 30px;
        background-color: black;
        color: #fff;
      }
    }
  }
  .card_main {
    // margin: 0 100px;
    display: block;
    height: 300px;
    background-color: #f7f8fa;
    .card_main_box {
      position: relative;
      height: 250px;
      padding: 25px 0;
      max-width: 1207px;
      margin: 0 auto;
      // background-color: red;
      .card_box {
        width: 280px;
        height: 250px;
        margin: 0 10px;
        .card_title {
          font-size: 24px;
          text-align: center;
        }
        .card_info {
          font-size: 16px;
          margin: 10px auto;
          text-align: left;
          line-height: 25px;
        }
      }
    }
  }
  .card_main_class {
    // height: 320px;
    background-color: burlywood;
  }
}
</style>
