<template>
  <div class="login_body">
    <el-card class="login_mian">
      <div class="login_title">手机注册</div>
      <el-button
        class="verify_btn"
        type="primary"
        @click="handleverify()">verify</el-button>
      <Vcode
        :imgs="[ Img2]"
        :show="isShow"
        @onSuccess="onSuccess()"
        @onClose="onClose"
      />
      <el-form
        ref="register_form"
        :rules="rule"
        :model="register_form"
        label-position="left"
        class="register_form"
        label-width="80px">
        <!-- <el-form-item label="手机号码" prop="tel">
          <el-input v-model="register_form.tel" clearable class="register_form_input" placeholder="手机号码"/>
        </el-form-item> -->

        <el-form-item label="短信验证" prop="tel" class="form_item">
          <el-button class="message_btn" type="primary">获取验证码</el-button>
          <el-input v-model="register_form.tel" clearable class="register_form_input" placeholder="手机号码"/>
        </el-form-item>
        <el-form-item label="登陆密码" prop="code">
          <el-input v-model="register_form.code" clearable class="register_form_input" placeholder="登陆密码"/>
        </el-form-item>
      </el-form>
      <div class="check_inline">
        <el-checkbox v-model="register_form.agree" class="check_font" />
        同意并遵守
        <span >《服务条款》</span>
      </div>
      <el-button class="form_login_btn" type="primary" @click="handleregister()">注册</el-button>

    </el-card >
  </div>

</template>

<script type="text/ecmascript-6">
import Vcode from 'vue-puzzle-vcode'
import Img2 from '../../assets/success_icon.png'
export default {
  name: '',
  components: {
    Vcode
  },
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
      Img2,
      isShow: false, // 验证码模态框是否出现
      isVerify: false,
      register_form: {
        tel: '',
        agree: true
      },
      // 校验规则
      rule: {
        tel: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { validator: checktel, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入正确验证码', trigger: 'blur' },
          { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.isShow = true
    },
    // 用户通过了验证
    onSuccess(msg) {
      this.isShow = false // 通过验证后，需要手动隐藏模态框
      this.isVerify = true
    },
    // 用户点击遮罩层，应该关闭模态框
    onClose() {
      this.isShow = false
    },
    handleverify() {
      this.isShow = true
    },
    handleregister() {
      if (!this.isVerify) {
        return false
      }
      console.log('注册')

      const username = this.register_form.username
      const password = this.register_form.password
      if (this.register_form.agree) {
        this.$axios
          .post(this.baseurl + '/adm_xtgl_djrz', {
            username,
            password
          })
          .then(res => {
            console.log(11)
          })
      } else {
        this.$message({
          message: '需要同意服务条款才能注册哦~',
          type: 'warning'
        })
      }
    },
    gotolink(res) {
      console.log(res)
      this.$router.replace({ path: `/${res}` })
    }
  }
}
</script>

<style lang="scss" scoped  >
::-webkit-scrollbar {
  display: none;
}
.login_body {
  height: 100%;
  background: rgba(0, 0, 0, 0) url("../../assets/login/loginbg.png") no-repeat
    scroll 0% 0%;
  .login_mian {
    width: 500px;
    height: 450px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    .login_title {
      height: 40px;
      text-align: center;
      line-height: 40px;
      font-size: 20px;
    }
    .register_form {
      padding: 0 50px;
    }
    .form_item {
      margin-bottom: 20px;
      position: relative;
      // background-color: burlywood;
      .verify_btn {
        width: 200px;
      }
      .message_btn {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 10;
      }
    }
    .check_inline {
      margin-top: 50px;
      height: 20px;
      span {
        font-size: 14px;
        color: rgb(58, 88, 223);
      }
      .check_font {
        font-size: 16px;
        line-height: 20px;
      }
    }
    .form_login_btn {
      width: 220px;
      margin-top: 20px;
    }
  }
}
</style>
