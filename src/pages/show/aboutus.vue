<template>
  <div class="">
    <div class="aboutus_top">
      <img class="imgsty" src="../../assets/showindex/aboutus.png" alt="">
    </div>
    <div class="aboutus_contain">
      <el-row>
        <el-col :span="12" class="aboutus_contain_item">
          <div class="contain_item_title">
            福建五色神牛网络科技有限公司
          </div>
          <div class="contain_item_info">
            五色神牛科技（Fancy Bull）是一家专注从事视觉深度学习算法研究，以人工智能研发应用为主要方向科技创新型公司。公司以“让世界看起来更简单”为企业愿景，以深度学习为技术引擎，结合物联网和大数据分析，致力于通过人工智能与大数据处理技术为传统市政、公安、保险、教育、金融等提供人工智能解决方案和服务。
          </div>
          <div class="contain_item_foot">商务咨询： 0595-22307555</div>
          <div class="contain_item_foot">邮箱： fb@fancybull.cn</div>
          <div class="contain_item_foot">地址：福建省泉州市丰泽街道博后路374号芳源综合楼5楼</div>
          <div class="map_box">
            <baidumap/>
          </div>
        </el-col>

        <el-col :span="12" :scroll-wheel-zoom="true" class="aboutus_contain_item fr">
          <img class="imgsty" src="../../assets/showindex/aboutus2.png" alt="">
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import baidumap from '../../components/baidumap.vue'
export default {
  name: '',
  components: {
    baidumap
  },
  data() {
    return {}
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped  >
.map {
  width: 430px;
  height: 400px;
}
.aboutus_top {
  height: auto;
}
.aboutus_contain {
  max-width: 1170px;
  margin: 0 auto;
  // height: 600px;
  // background-color: bisque;
  .aboutus_contain_item {
    margin: 50px 0 auto;
    width: 540px;
    // height: 500px;
    // background-color: aqua;
    .contain_item_title {
      font-size: 30px;
      color: #00a1e6;
      font-family: "微软雅黑";
    }
    .contain_item_info {
      // background-color: aqua;
      width: 540px;
      height: 150px;
      font-size: 18px;
      color: #111111;
      line-height: 30px;
      text-align: left;
      margin-top: 30px;
      font-family: "微软雅黑";
    }
    .contain_item_foot {
      font-size: 18px;
      color: #111111;
      line-height: 20px;
      text-align: left;
      margin-top: 20px;
      font-family: "微软雅黑";
    }
    .map_box {
      width: 430px;
      height: 400px;
      // background-color: brown;
      margin: 20px auto;
    }
  }
}
</style>
