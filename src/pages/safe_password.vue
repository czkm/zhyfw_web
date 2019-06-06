<!--  -->
<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item
        v-for="(item, index) in data"
        :key="index"
        :timestamp="item.timestamp"
        placement="top"
      >
        <el-card>
          <h4>{{ item.title }}</h4>
          <p>{{ item.contain }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          timestamp: '2018/4/2',
          title: '更新 Github 模板',
          contain: '王小虎 提交于 2018/4/2 20:46'
        },
        {
          timestamp: '2018/4/8',
          title: '随便系诶单东西',
          contain: '提交啦'
        }
      ]
    }
  }
}
</script>
<style scoped  lang='scss'>
</style>
