<template>
  <div class="login_body">
    <el-card class="login_mian">
      <div class="login_title">神牛云-登录</div>
      <el-form
        ref="login_form"
        :model="login_form"
        label-position="left"
        class="login_form"
        label-width="60px">
        <el-form-item label="用户名">
          <el-input v-model="login_form.name" class="login_form_input" placeholder="用户名"/>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="login_form.password" class="login_form_input" placeholder="用户名"/>
        </el-form-item>
      </el-form>

      <el-checkbox v-model="login_form.agree" class="form_login_radio" >
      <el-link href="https://element.eleme.io" target="_blank">同意并遵守服务条款</el-link></el-checkbox >
      <el-button class="form_login_btn" type="primary" @click="handlelogin()">立即登录</el-button>
      <div class="login_from_bottom">
        <div class="bottom_ltem fl">还没有账号？<span @click="gotolink('register')">免费注册</span></div>
        <div class="bottom_ltem fr"><span @click="gotolink('repassword')">忘记密码？</span></div>
      </div>
    </el-card >
  </div>

</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  data() {
    return {
      login_form: {
        agree: true
      }
    }
  },
  methods: {
    handlelogin() {
      const username = this.login_form.username
      const password = this.login_form.password
      if (this.login_form.agree) {
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
          message: '需要同意服务条款才能登陆哦~',
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
.login_body {
  height: 100%;
  background: rgba(0, 0, 0, 0) url("../../assets/login/loginbg.png") no-repeat
    scroll 0% 0%;
  .login_mian {
    width: 400px;
    height: 350px;
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
    .login_form {
      padding: 0 50px;
    }
    .login_from_bottom {
      height: 40px;
      margin-top: 20px;
      .bottom_ltem {
        height: 20px;
        margin: 10px 20px auto;
        font-size: 12px;
        line-height: 20px;
        span {
          cursor: pointer;
          color: cornflowerblue;
        }
      }
    }
    .form_login_radio {
      margin-top: 30px;
    }
    .form_login_btn {
      width: 220px;
      margin-top: 20px;
    }
  }
}
</style>
