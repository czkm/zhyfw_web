<!--  -->
<template>
  <div>
    <div ref="main" class="shadow" style="width: 100%;height:300px"/>
    <el-table
      :data="tableData"
      class="shadow"
      min-eight="400"
      border
      style="width: 100%;margin-top: 30px;"
    >
      <el-table-column type="selection" width="55"/>
      <el-table-column label="数据">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column label="接口状态">
        <template slot-scope="scope">
          <span v-if="scope.row.intertype==0">可用</span>
          <span v-else>不可用</span>
        </template>
      </el-table-column>
      <el-table-column label="申请时间">
        <template slot-scope="scope">{{ scope.row.appleytime|timeff }}</template>
      </el-table-column>
      <el-table-column label="appKey">
        <template slot-scope="scope">{{ scope.row.address }}</template>
      </el-table-column>
      <el-table-column label="appsecret">
        <template slot-scope="scope">{{ scope.row.appsecret }}</template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="160">
        <template slot-scope="scope">
          <el-button
            style="color: #007bff;"
            size="small"
            @click="handleEdit(scope.$index, scope.row)"
          >
            <i class="fa fa-window-restore"/>
            操作
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ]
    }
  },
  mounted() {
    this.echart_init()
  },
  methods: {
    echart_init() {
      // 绘制图表。
      var myChart = this.$echarts.init(this.$refs.main)
      // 绘制图表
      myChart.setOption({
        title: {
          text: '折线图堆叠'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      })
    }
  }
}
</script>
<style scoped  lang='scss'>
.table_class {
  padding: 20px;
}
</style>
