<template>
  <div class="contain_box">
    <div class="contain_main">
      <el-row>
        <el-col :span="12" class="contain_item">
          <div class="absolut_box">
            <div class="contain_title">平安指数</div>
            <div class="contain_info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptas sit excepturi nisi dolores, similique reprehenderit quod recusandae accusantium ab ducimus debitis nulla, aliquam itaque, maiores optio quis rerum illum.</div>

          </div>
        </el-col>
        <el-col :span="12" class="contain_item">
          <div class=" item_icon">
            <img class="imgsty" src="../../assets/showindex/photograph2.png" alt="">
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 导航 -->
    <div class="contain_bar">132132</div>
    <div class="contain_main">
      <div class="contain_main_title ">功能介绍</div>
      <el-card v-for="(item, index) in 2" :key="index" class="fl contain_card">
        <div>
          12312
        </div>
      </el-card>
    </div>

    <div class="contain_main">
      <div class="contain_main_title ">产品优势</div>
      <div class="contian_img">
        <img class="imgsty" src="../../assets/showindex/photograph1.png" alt="">
      </div>
    </div>
    <div class="contain_main">
      <div class="contain_main_title ">应用场景</div>
      <el-card v-for="(item, index) in 3" :key="index" class="fl contain_card">
        <div>
          12312
        </div>
      </el-card>
    </div>
    <div class="contain_main">
      <div class="contain_main_title ">产品价格</div>
      <el-card v-for="(item, index) in 4" :key="index" class="fl contain_card">

        <div class="contain_main_header">
          <span>国内短信</span>
        </div>
        <div class="card_contain_info">
          5w条短信
          <p>￥2250元</p>
        </div>
        <div class="card_contain_price">
          <span>0.045</span>元/条
        </div>
        <el-button
          class="card_contain_btn"
          type="primary"
          @click="handlenext()">
          立即购买</el-button>

      </el-card>
    </div>
    <!-- 接入使用 -->
    <div class="contain_main">
      <div class="contain_main_title ">接入试用</div>
      <el-steps :active="4" align-center class="contain_stepline">
        <el-step title="步骤1" icon="el-icon-edit" description="这是一段很长很长很长的描述性文字"/>
        <el-step title="步骤2" icon="el-icon-upload" description="这是一段很长很长很长的描述性文字"/>
        <el-step title="步骤3" icon="el-icon-picture" description="这是一段很长很长很长的描述性文字"/>
        <el-step title="步骤4" icon="el-icon-picture" description="这是一段很长很长很长的描述性文字"/>
      </el-steps>
    </div>
    <div class="contain_bottom">
      <img class="imgsty" src="../../assets/showindex/photograph.png" alt="">
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
.absolut_box {
  margin: 20px auto;
  height: 200px;
  width: 300px;
}
.contain_title {
  font-size: 24px;
  text-align: center;
}
.contain_card {
  margin: 10px 30px auto;
  width: 250px;
  min-height: 150px;
}

.contain_info {
  font-size: 16px;
  text-align: center;
  line-height: 25px;
}
.contain_main {
  min-height: 300px;
  padding: 20px 30px;
  // background-color: rgb(54, 190, 115);
  overflow: hidden;
  clear: both;
  .contian_img {
    height: 555px;
  }
  .contain_main_title {
    padding: 10px;
    font-size: 28px;
    text-align: left;
  }

  .contain_item {
    .item_icon {
      width: 500px;
      height: 300px;
      margin: 0 auto;
    }
  }
  .card_contain_btn {
    margin-top: 5px;
    width: 200px;
  }
  .contain_stepline {
    margin: 150px auto;
  }
}
.contain_bar {
  height: 45px;
  background-color: rgb(185, 185, 185);
}
.contain_main_header {
  height: 30px;
  line-height: 30px;
  color: rgb(19, 83, 180);
  // background-color: yellow;
  border-bottom: 1px solid darkgray;
}
.card_contain_info {
  // width: 150px;
  // height: 30px;
  //   line-height: 5px;
  margin-top: 20px;
  font-size: 16px;
  text-align: center;
}
.card_contain_price {
  padding: 10px 0;
  font-size: 16px;
  color: black;
  span {
    font-size: 24px;
    color: rgb(235, 51, 51);
  }
}
.contain_bottom {
  display: block;
  background-color: violet;
}
</style>
