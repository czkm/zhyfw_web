<!--  -->
<template>
  <div>
    <!-- 表头搜索 -->
    <el-row>
      <el-col :span="24">
        <el-form :inline="true" :model="searchform" class="demo-form-inline">
          <el-form-item :label-width="searchlabel" class="fl" label="冻结人">
            <el-input v-model="searchform.username" placeholder="冻结人" class="el_input"/>
          </el-form-item>

          <el-form-item class="fl">
            <el-button
              type="primary"
              icon="el-icon-search"
              size="small"
              @click="handle_gettable()"
            >搜索</el-button>
          </el-form-item>
          <el-form-item class="fl">
            <el-button icon="el-icon-refresh" size="small" @click="handle_reset()">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <div class="el_hr"/>
    <!-- 功能按钮组 -->
    <div class="fl" style="margin:10px;margin-left:20px">
      <el-button class="el-icon-refresh el_search_btn" @click="handle_refresh()">
        <span class="el_search_text">刷新数据</span>
      </el-button>
      <el-button class="el-icon-delete el_search_btn" @click="Batch_del()">
        <span class="el_search_text">批量删除</span>
      </el-button>
    </div>
    <!-- 用户表单 -->
    <div class="table_class ">
      <el-table
        v-loading="loading"
        ref="multipleTable"
        :data="tableData"
        height="490"
        tooltip-effect="dark"
        border
        style="width: 100%;margin-top:20px"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"/>
        <!-- <el-table-column label="冻结人">
          <template slot-scope="scope">{{ scope.row.username }}</template>
        </el-table-column> -->
        <el-table-column label="时间">
          <template slot-scope="scope">{{ scope.row.time|timeff }}</template>
        </el-table-column>
        <el-table-column label="内容">
          <template slot-scope="scope">{{ scope.row.contain }}</template>
        </el-table-column>
        <!-- <el-table-column label="操作人" width="100">
          <template slot-scope="scope">{{ scope.row.lockreason }}</template>
        </el-table-column> -->
        <el-table-column fixed="right" label="操作" width="80">
          <template slot-scope="scope">
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row,scope.row.freezeid)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[5,10,500]"
        :page-size="pagesize"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <!-- </vue-scroll> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      searchlabel: '85px',
      addlabel: '80px',
      searchform: {},
      tableData: [
        {
          contain: '二维码地址接口',
          time: '201405069223'
        },
        {
          contain: '二维码地址接口',
          intertype: '1',
          time: '201405069223',
          appkey: '63c63651b1a26625',
          appsecret: '675759f9f382299baf9396c9ebb4d7fe'

        }
      ],
      delArr: [], // 删除数组
      total: 0,
      currentPage: 1, // 初始页
      pagesize: 10, //    每页的数据
      multipleSelection: [], // 选择值
      baseurl: `${this.$store.state.bseurl}/xtgl`
    }
  },
  mounted() {
    this.handle_gettable()
  },
  methods: {
    handle_gettable() {
      // this.loading = true
      let starttime
      let endtime
      if (this.searchform.selecttime) {
        starttime = `${this.searchform.selecttime[0]}000000`
        endtime = `${this.searchform.selecttime[1]}000000`
      }
      const lockstate = this.searchform.lockstate
      const username = this.searchform.username
      this.$axios
        .post(this.baseurl + '/adm_xtgl_djrz', {
          token: this.$store.state.token,
          numberpages: this.pagesize,
          nowpages: this.currentPage,
          lockstate,
          username,
          starttime,
          endtime
        })
        .then(res => {
          this.loading = false
          if (res.data.result !== null) {
            this.tableData = res.data.result[0].djrzPage
            // 设置分页器
            this.total = res.data.result[0].conunt * 1
            this.currentPage = res.data.result[0].nowpages * 1
            this.pagesize = res.data.result[0].numberpages * 1
          } else {
            this.tableData = []
            this.total = 0
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 局部刷新
    handle_refresh() {
      this.tableData = []
      this.handle_gettable()
    },
    // 重置
    handle_reset() {
      this.searchform = {}
    },

    // 控制页面页数
    handleSizeChange: function(size) {
      this.pagesize = size
      this.handle_gettable()
    },
    // 点击第几页
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage
      this.handle_gettable()
    },
    // 删除控制
    handleDelete(index, row, freezeid) {
      console.log(index, row, freezeid)
      this.$confirm('确认删除此用户?删除后不可恢复请谨慎处理', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const logids = []
        logids.push(freezeid)
        this.$axios
          .post(this.baseurl + '/adm_xtgl_djrzdel', {
            token: this.$store.state.token,
            logids
          })
          .then(res => {
            this.tipmsg(res)
            this.handle_gettable()
          })
          .catch(err => {
            console.log(err)
          })
      })
    },
    // 控制多选
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    Batch_del() {
      if (this.multipleSelection.length) {
        this.tip_confirm(this.Delete_Manage)
      } else {
        this.msgalert('请选择一个用户', 'warning')
      }
    },
    // 批量删除
    Delete_Manage() {
      // let _this = this
      for (let index = 0; index < this.multipleSelection.length; index++) {
        this.delArr.push(this.multipleSelection[index].freezeid)
      }
      const logids = this.delArr
      this.$axios
        .post(this.baseurl + '/adm_xtgl_djrzdel', {
          token: this.$store.state.token,
          logids
        })
        .then(res => {
          this.delArr = []
          this.tipmsg(res)
          this.handle_gettable()
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
 <style lang="scss" scoped >
 .table_class{
   padding: 20px
 }
</style>
