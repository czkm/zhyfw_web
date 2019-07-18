<!--  -->
<template>
  <div>
    <el-table :data="tableData" min-eight="400" border style="width: 100%;margin-top: 30px;">
      <el-table-column type="selection" width="55" fixed />
      <el-table-column label="接口名">
        <template slot-scope="scope">{{ scope.row.service_name }}</template>
      </el-table-column>
      <el-table-column label="接口状态">
        <template slot-scope="scope">
          <span v-if="scope.row.is_del==0">可用</span>
          <span v-else>不可用</span>
        </template>
      </el-table-column>
      <el-table-column label="申请时间">
        <template slot-scope="scope">{{ scope.row.create_time|timeff }}</template>
      </el-table-column>
      <el-table-column label="到期时间">
        <template slot-scope="scope">{{ scope.row.update_time|timeff }}</template>
      </el-table-column>
      <el-table-column label="appid">
        <template slot-scope="scope">{{ scope.row.authorize_service_id }}</template>
      </el-table-column>
      <el-table-column label="publicKey">
        <template slot-scope="scope">{{ scope.row.appkey }}</template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <!-- <el-button style="color: #007bff;" size="small" @click="handleEdit(scope.$index, scope.row)">
            <i class="fa fa-telegram"/>
            设置白名单
          </el-button>
          <el-button style="color: #007bff;" size="small" @click="handleEdit(scope.$index, scope.row)">
          服务介绍</el-button>-->
          <el-button
            style="color: #007bff;"
            size="small"
            @click="handleEdit(scope.$index, scope.row)"
          >
            <i class="fa fa-telegram" />
            设置白名单
          </el-button>
          <el-button
            style="color: #007bff;"
            size="small"
            @click="handleEdit(scope.$index, scope.row)"
          >介绍</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: this.$store.state.token,
      baseurl: this.$store.state.BaseUrl + '/console',
      tableData: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      this.$Haxios(this.baseurl + '/selectservice', {}, this.token).then(
        res => {
          this.tableData = res.data.result
        }
      )
    }
  }
}
</script>
<style scoped  lang='scss'>
</style>
