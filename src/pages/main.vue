<template>
  <el-row :gutter="40" class="panel-group" >
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" >
        <div class="card-panel-icon-wrapper icon-people">
          <!-- <img width="60px" src="../assets/游客.png" class-name="card-panel-icon" > -->
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">人数1</div>
          <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" >
        <div class="card-panel-icon-wrapper icon-message">
          <!-- <img width="60px" src="../assets/用户.png" class-name="card-panel-icon" > -->
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">人数2</div>
          <count-to :start-val="0" :end-val="20334" :duration="3000" class="card-panel-num"/>
        </div>
      </div>
    </el-col>

    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" >
        <div class="card-panel-icon-wrapper icon-shopping">
          <!-- <img width="60px" src="../assets/商家.png" class-name="card-panel-icon" > -->
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">人数3</div>
          <count-to :start-val="0" :end-val="2000" :duration="3600" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" >
        <div class="card-panel-icon-wrapper icon-money">
          <!-- <img width="60px" src="../assets/公司.png" class-name="card-panel-icon" > -->
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">随便3</div>
          <count-to :start-val="0" :end-val="20" :duration="3600" class="card-panel-num"/>
        </div>
      </div>
    </el-col>
  </el-row>

</template>

<script>

import CountTo from 'vue-count-to'
export default {
  components: {
    CountTo
  },
  methods: {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.panel-group {
  margin-top: 18px;
  .card-panel-col{
    margin-bottom: 32px;
  }
  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }
      .icon-people {
         background: #40c9c6;
      }
      .icon-message {
        background: #36a3f7;
      }
      .icon-money {
        background: #f4516c;
      }
      .icon-shopping {
        background: #34bfa3
      }
    }
    .icon-people {
      color: #40c9c6;
    }
    .icon-message {
      color: #36a3f7;
    }
    .icon-money {
      color: #f4516c;
    }
    .icon-shopping {
      color: #34bfa3
    }
    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }
    .card-panel-icon {
      float: left;
      font-size: 48px;
    }
    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}
</style>
