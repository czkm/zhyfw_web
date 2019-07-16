<template>
  <div class="general_contain">

    <div class="general_item">
      <el-tag
        class="general_message"
        type="warning"
        effect="dark">
        <i class="el-icon-message-solid"/> 重要通知神牛云上线啦！！
      </el-tag>
    </div>
    <div class="general_item">
      <div class="contain_title contain_box fl">
        服务接口
      </div>
      <div class="contain_box fl ">
        <el-card class="contain_box_item fl">
          标准地址
        </el-card>
        <el-card class="contain_box_item fl">
          一标三实
        </el-card>
        <el-card class="contain_box_item fl">
          便携式采集
        </el-card>
      </div>
    </div>
    <div class="general_item">
      <div class="contain_title contain_box fl">
        服务产品
      </div>
      <div class="contain_box fl ">
        <el-card class="contain_box_item fl">
          拍拍采
        </el-card>
        <el-card class="contain_box_item fl">
          看看采
        </el-card>
        <el-card class="contain_box_item fl">
          平安指数
        </el-card>
        <el-card class="contain_box_item fl">
          拍拍采管理端
        </el-card>
      </div>
      <div class="contain_box fl ">
        <el-card class="contain_box_item fl">
          出租房小程序
        </el-card>
        <el-card class="contain_box_item fl">
          用工单位小程序
        </el-card>
        <el-card class="contain_box_item fl">
          美月美
        </el-card>
      </div>
    </div>

    <div class="general_item">
      <div class="contain_title contain_box fl">
        资源监控
      </div>
      <div class="general_echart fl">
        <div ref="chart_main" class="general_echart_main" />
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  data() {
    return {}
  },
  mounted() {
    this.echart_init()
  },
  methods: {
    echart_init() {
      // 绘制图表。
      var myChart = this.$echarts.init(this.$refs.chart_main)
      // 绘制图表
      myChart.setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 2333, 1290, 1330, 132],
            type: 'line'
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped >
.general_contain {
  height: auto;
  // background-color: yellow;
}
.contain_title {
  font-size: 20px;
  font-weight: 20;
  text-align: left;
}
.general_item {
  clear: both;
  overflow: hidden;
  // min-height: 200px;
  // background-color: red;
  margin-bottom: 20px;
}
.general_message {
  text-align: left;
  width: 100%;
}
.general_echart {
  width: 100%;
  // height: 350px;
  // background-color: yellowgreen;
  .general_echart_main {
    width: 100%;
    height: 300px;
    // background-color: violet;
  }
}
.contain_box {
  width: 100%;
  display: block;
  padding: 10px;
  // height: 50px;
  // background-color: violet;
  .contain_box_item {
    margin: 10px 10px auto;
    padding: 5px;
    width: 250px;
  }
}
</style>
