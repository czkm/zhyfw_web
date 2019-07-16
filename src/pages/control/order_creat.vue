<!--  -->
<template>

  <div class=" table_class">
    <el-form ref="form" :model="form" label-width="80px" style="width:400px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"/>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域" style="width: 100%;">
          <el-option label="区域一" value="shanghai" selected/>
          <el-option label="区域二" value="beijing"/>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%;"/>
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" placeholder="选择时间" style="width: 100%;"/>
        </el-col>
      </el-form-item>

      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助"/>
          <el-radio label="线下场地免费"/>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input v-model="form.desc" type="textarea"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
<style scoped  lang='scss'>
.table_class{
  padding: 20px
  // width: 800px;
  // margin: 0 auto
}
</style>
