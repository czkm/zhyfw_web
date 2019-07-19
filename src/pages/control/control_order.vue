<template>
  <el-tabs v-model="activeName" type="border-card">
    <el-tab-pane label="提交工单" name="addorder">
      <el-row>
        <el-col :span="10">
          <div class="contain_item">
            <div class="table_class">
              <el-form ref="order_form" :rules="rule" :model="order_form" label-width="80px">
                <el-form-item label="标题" prop="title" class="order_form_item">
                  <el-input v-model="order_form.title" />
                </el-form-item>
                <el-form-item label="问题描述" prop="ms" class="order_form_item">
                  <el-input
                    v-model="order_form.ms"
                    maxlength="200"
                    show-word-limit
                    type="textarea"
                  />
                </el-form-item>
                <el-form-item label="联系电话" prop="lxrdh" class="order_form_item">
                  <el-input v-model="order_form.lxrdh" />
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="add_order()">立即创建</el-button>
                  <el-button>取消</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="我的工单" name="orderlist">
      <!-- 表头搜索 -->
      <el-row>
        <el-col :span="24">
          <el-form :inline="true" :model="searchform" class="demo-form-inline">
            <el-form-item :label-width="searchlabel" class="fl" label="标题">
              <el-input v-model="searchform.username" placeholder="标题" class="el_input" />
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
      <div class="el_hr" />
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
      <div class="table_class">
        <el-table
          v-loading="loading"
          ref="orderTable"
          :data="tableData"
          height="490"
          tooltip-effect="dark"
          border
          style="width: 100%;margin-top:20px"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55" />
          <el-table-column label="工单编号">
            <template slot-scope="scope">{{ scope.row.repair_id }}</template>
          </el-table-column>
          <el-table-column label="标题">
            <template slot-scope="scope">{{ scope.row.title }}</template>
          </el-table-column>
          <el-table-column label="问题描述">
            <template slot-scope="scope">{{ scope.row.ms }}</template>
          </el-table-column>
          <el-table-column label="工作状态">
            <template slot-scope="scope">
              <span v-if="scope.row.is_del==0">可用</span>
              <span v-else>不可用</span>
            </template>
          </el-table-column>
          <el-table-column label="提交时间">
            <template slot-scope="scope">{{ scope.row.contain|timeff }}</template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="80">
            <template slot-scope="scope">
              <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
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
    </el-tab-pane>
  </el-tabs>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  data() {
    var checktel = (rule, value, callback) => {
      const regEn = /^1(3|4|5|7|8)\d{9}$/
      if (!regEn.test(value)) {
        callback(new Error('请输入正确手机号码'))
      } else {
        callback()
      }
    }
    return {
      token: this.$store.state.token,
      baseurl: this.$store.state.BaseUrl + '/console',
      activeName: 'addorder',
      order_form: {},
      loading: false,
      searchlabel: '85px',
      addlabel: '80px',
      searchform: {},
      tableData: [],
      delArr: [], // 删除数组
      total: 0,
      currentPage: 1, // 初始页
      pagesize: 10, //    每页的数据
      multipleSelection: [], // 选择值
      // 校验规则
      rule: {
        lxrdh: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { validator: checktel, trigger: 'blur' }
        ],
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        ms: [{ required: true, message: '请填写具体描述', trigger: 'blur' }]
      }
    }
  },
  mounted() {
    this.handle_gettable()
  },
  methods: {
    add_order() {
      const ms = this.order_form.ms
      const title = this.order_form.title
      const lxrdh = this.order_form.lxrdh
      this.$refs['order_form'].validate(valid => {
        if (valid) {
          this.$Haxios(
            this.baseurl + '/addrepairorder',
            {
              ms,
              title,
              lxrdh
            },
            this.token
          ).then(res => {
            if (res.data.code === 200) {
              this.msgalert(res.data.msg, 'success')
            } else {
              this.msgalert(res.data.msg, 'error')
            }
          })
        }
      })
    },
    handle_gettable() {
      this.loading = true
      this.$Haxios(this.baseurl + '/selectrepairorder', {}, this.token).then(
        res => {
          this.loading = false
          this.tableData = res.data.result
        }
      )
    },
    // 局部刷新
    handle_refresh() {
      this.tableData = []
      // this.handle_gettable()
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
.table_class {
  padding: 20px;
}
.order_form_item {
  margin-bottom: 22px;
}
</style>
