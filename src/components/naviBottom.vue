<template>
  <div class="navi_bottom">
    <div class="navi_bottom_main">
      <el-row :gutter="20">
        <el-col :span="12" :offset="6" class="navi_bottom_item">
          <div style="margin-left:80px">
            <div class="bottom_item">	公司名称： 福建五色神牛网络科技有限公司</div>
            <div class="bottom_item">	商务咨询： 0595-22307555</div>
            <div class="bottom_item">	合作邮箱： fb@fancybull.cn</div>
            <div class="bottom_item">	地址：福建省泉州市丰泽街道博后路374号芳源综合楼五楼</div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="navi_fl_item">
            <img class="imgsty" src="../assets/showindex/qrcode.png" alt="">
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped  >
.navi_bottom {
  height: 200px;
  background-color: black;
  .navi_bottom_main {
    max-width: 1170px;
    height: 200px;
    position: relative;
    padding: 0 10px;
    margin: 0 auto;
    .navi_bottom_item {
      height: 150px;
      // width: 300px;
      margin: 25px auto;
      .bottom_item {
        color: #fff;
        height: 20px;
        text-align: left;
        line-height: 20px;
        font-size: 14px;
        margin: 10px auto;
      }
    }
    .navi_fl_item {
      width: 180px;
      margin: 10px auto;
    }
  }
  // position: fixed;
  // // top: 0;
  // bottom: 0;
  // z-index: 99;
}
</style>
