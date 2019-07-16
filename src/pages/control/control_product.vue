<template>
  <el-row>
    <el-card class="box_card fl">
      <div class="card_title">拍拍采</div>
      <div class="card_info">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, veritatis? Deleniti dicta unde eos. Expedita sit eius doloribus nulla, commodi delectus id eligendi voluptatibus nihil, aliquam error voluptate nam illum.
      </div>
      <div class="card_bottom">
        <el-button class="fl" type="text">下载</el-button>
        <el-button class="fl" type="text">产品介绍</el-button>
      </div>
    </el-card>
    <el-card class="box_card fl">
      <div class="card_title">拍拍采</div>
      <div class="card_info">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, veritatis? Deleniti dicta unde eos. Expedita sit eius doloribus nulla, commodi delectus id eligendi voluptatibus nihil, aliquam error voluptate nam illum.
      </div>
      <div class="card_bottom">
        <el-button class="fl" type="text">下载</el-button>
        <el-button class="fl" type="text">产品介绍</el-button>
      </div>
    </el-card>
    <el-card class="box_card fl">
      <div class="card_title">拍拍采</div>
      <div class="card_info">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, veritatis? Deleniti dicta unde eos. Expedita sit eius doloribus nulla, commodi delectus id eligendi voluptatibus nihil, aliquam error voluptate nam illum.
      </div>
      <div class="card_bottom">
        <el-button class="fl" type="text">下载</el-button>
        <el-button class="fl" type="text">产品介绍</el-button>
      </div>
    </el-card>
  </el-row>

</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      currentDate: '123'
    }
  }
}
</script>

<style lang="scss" scoped >

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.box_card {
  margin: 0 10px;
  width: 300px;
  .card_title {
    font-size: 18px;
    margin: 10px;
  }
  .card_info {
    text-align: left;
    // margin: 10px
  }
  .card_bottom {
    background-color: yellow;
  }
}
</style>

