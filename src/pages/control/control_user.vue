<template>
  <el-tabs v-model="activeName" type="border-card" >
    <el-tab-pane label="基本信息" name="baseinfo" type="border-card">
      <div class="contain_box">
        <div class="contain_title contain_box fl">
          个人信息
        </div>
        <el-row>
          <el-col :span="10">
            <div class="contain_item">
              <el-row class="contian_item_main">
                <el-col :span="8" class="l_item_title">头像</el-col>
                <el-col :span="10" class="l_item_info">
                  <img :src="sysUserAvatar" class="formuserimg" >
                </el-col>
                <el-col :span="2">
                  <el-button class="formuser_btn" type="text">文字按钮</el-button>
                </el-col>
              </el-row>
              <el-row class="contian_item_main">
                <el-col :span="8" class="item_title">登录密码</el-col>
                <el-col :span="10" class="item_info">{{ login.num }}</el-col>
                <el-col :span="2">
                  <el-button type="text">文字按钮</el-button>
                </el-col>
              </el-row>
              <el-row class="contian_item_main">
                <el-col :span="8" class="item_title">登录密码</el-col>
                <el-col :span="10" class="item_info">{{ login.password }}</el-col>
                <el-col :span="2">
                  <el-button type="text">文字按钮</el-button>
                </el-col>
              </el-row>
              <el-row class="contian_item_main">
                <el-col :span="8" class="item_title">手机</el-col>
                <el-col :span="10" class="item_info">{{ login.phone }}</el-col>
                <el-col :span="2">
                  <el-button type="text">文字按钮</el-button>
                </el-col>
              </el-row>
              <el-row class="contian_item_main">
                <el-col :span="8" class="item_title">邮箱</el-col>
                <el-col :span="10" class="item_info">{{ login.email }}</el-col>
                <el-col :span="2">
                  <el-button type="text">文字按钮</el-button>
                </el-col>
              </el-row>
              <el-row class="contian_item_main">
                <el-col :span="8" class="item_title">注册时间</el-col>
                <el-col :span="10" class="item_info">{{ login.creattime }}</el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
        <div class="contain_title contain_box fl">
          业务信息
        </div>
        <el-row>
          <el-col :span="10">
            <div class="contain_item">
              <el-row class="contian_item_main">
                <el-col :span="8" class="item_title">公司名称</el-col>
                <el-col :span="10" class="item_info">{{ bussiness.name }}</el-col>
                <el-col :span="2">
                  <el-button type="text">文字按钮</el-button>
                </el-col>
              </el-row>
              <el-row class="contian_item_main">
                <el-col :span="8" class="item_title">所在行业</el-col>
                <el-col :span="10" class="item_info">{{ bussiness.type }}</el-col>
                <el-col :span="2">
                  <el-button type="text">文字按钮</el-button>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-tab-pane>
    <el-tab-pane label="企业认证" name="businessinfo">
      <div class="contain_box">
        <div class="contain_title contain_box fl">
          业务信息
        </div>
        <el-row>
          <el-col :span="24">
            <div class="contian_main">
              <el-form ref="verify_form" :model="verify_form" label-width="120px">
                <el-form-item label="企业名称">
                  <el-input v-model="verify_form.name"/>
                </el-form-item>
                <el-form-item label="印业执照">
                  <el-input v-model="verify_form.license"/>
                </el-form-item>
                <el-form-item label="印业执照">
                  <el-row>
                    <el-col :span="10">
                      <el-upload
                        ref="newupload"
                        :action="doUpload()"
                        :before-upload="beforeUpload"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :limit="1"
                        :file-list="fileList"
                        :show-file-list="false"
                        class="avatar-uploader"
                        multiple
                      >
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"/>
                      </el-upload>
                    </el-col>
                    <el-col :span="12" class="fr" style="height:180px">
                      <img class="imgsty" src="../../assets/control/license.jpg" alt="">
                      <div>Lorem ipsum dolor sit amet consectetur, adipisicing </div>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-form-item >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quaerat eligendi quis minima porro, aut temporibus ducimus nam eum vitae explicabo excepturi atque. Reprehenderit, itaque cupiditate facere est velit nobis.
                </el-form-item>
              </el-form>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="contain_box">
        <div class="contain_title contain_box fl">
          法人信息
        </div>
        <el-row>
          <el-col :span="24">
            <div class="contian_main">
              <el-form ref="verify_form" :model="verify_form" label-width="120px">
                <el-form-item label="法定代表人资料">
                  <el-row>
                    <el-col :span="10">
                      <el-upload
                        ref="newupload"
                        :action="doUpload()"
                        :before-upload="beforeUpload"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :limit="1"
                        :file-list="fileList"
                        :show-file-list="false"
                        class="avatar-uploader"
                        multiple
                      >
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"/>
                      </el-upload>
                    </el-col>
                    <el-col :span="12" class="fr" style="height:180px">
                      <img class="imgsty" src="../../assets/control/idcard.jpg" alt="">
                      <div>Lorem ipsum dolor sit amet consectetur, adipisicing </div>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-form-item >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quaerat eligendi quis minima porro, aut temporibus ducimus nam eum vitae explicabo excepturi atque. Reprehenderit, itaque cupiditate facere est velit nobis.
                </el-form-item>
              </el-form>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="contain_box">
        <div class="contain_title contain_box fl">
          企业联系人
        </div>
        <el-row>
          <el-col :span="24">
            <div class="contian_main">
              <el-form ref="verify_form" :model="verify_form" label-width="120px">
                <el-form-item label="联系人姓名">
                  <el-input v-model="verify_form.name"/>
                </el-form-item>
                <el-form-item label="联系人手机号码">
                  <el-input v-model="verify_form.phone"/>
                </el-form-item>
              </el-form>
              <el-button class="submit_btn" type="primary" plain>确认</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-tab-pane>

  </el-tabs>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  data() {
    return {
      fileList: [],
      imageUrl: '',
      login: {
        num: '21231232312',
        password: '211231',
        phone: 'password',
        email: '1231231231@qq.com',
        creattime: '2032132'
      },
      bussiness: {
        name: '五色神牛',
        type: '互联网'
      },
      verify_form: {}, // 企业认证
      activeName: 'businessinfo',
      sysUserAvatar:
        'https://y.gtimg.cn/music/photo_new/T001R300x300M000002eEEYT4ACDdX.jpg'
    }
  },
  methods: {
    doUpload() {
      return ''
    },
    imgcheck(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    beforeUpload(file) {
      if (!this.imgcheck(file)) {
        return false
      }
      console.log(file)
      const fd = new FormData()
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      fd.append('file', file) // 传文件
      fd.append('token', this.$store.state.token) // 传其他参数
      this.$axios
        .post(this.baseurl + '/adm_xtgl_yhgl_import', fd, config)
        .then(res => {
          if (res.data.code === 200) {
            this.msgalert('添加成功', 'success')
          } else if (res.data.code === 307) {
            this.msgalert(res.data.msg, 'warning')
            this.handle_gettable()
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 文件上传
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    }
  }
}
</script>

<style lang="scss" scoped >
.avatar-uploader,
.el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader:hover,
.el-upload:hover,
.avatar-uploader-icon:hover {
  border-color: #409eff;
  color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.l_item_title {
  text-align: left;
  line-height: 80px;
}
.item_title,
.item_info {
  text-align: left;
  line-height: 40px;
}
.l_item_info {
  text-align: left;
  line-height: 0;
}
.contain_title {
  font-size: 18px;
  text-align: left;
}
.formuserimg {
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 100px;
  margin: 0 auto;
}
.formuser_btn {
  margin: 20px auto;
}

.contain_box {
  // height: 50px;
  width: 100%;
  display: block;
  padding: 10px;
  // height: 50px;
  // background-color: violet;
  .contain_box_item {
    margin: 10px 10px auto;
    padding: 5px;
    width: 250px;
    // background-color: thistle;
  }
  .contain_item {
    width: 100%;
    // min-height: 500px;
    // background-color: yellowgreen;
    padding: 10px;
    .contian_item_main {
      height: auto;
      margin: 20px;
      // background-color: tomato;
    }
    .item {
      width: 300px;
      // height: 50px;
      // background-color: aqua;
      .item_title {
        width: 150px;
        font-size: 14px;
        text-align: left;
        // background-color: blueviolet;
      }
      .item_info {
        width: 150px;
        // background-color: yellow;
      }
    }
  }
}

.contian_main {
  // min-height: 500px;
  max-width: 1000px;
  margin: 0 auto;
  // background: rgb(170, 100, 100);
}
.submit_btn {
  width: 500px;
  margin: 0 auto;
}
</style>
