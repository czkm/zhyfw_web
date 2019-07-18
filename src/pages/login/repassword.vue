<template>
  <div class="login_body">
    <el-card class="login_mian">
      <div class="login_title">
        <el-button class="fl" icon="el-icon-arrow-left" circle @click=" gotolink('login')" />
        忘记密码</div>
      <el-form
        ref="repassword"
        :rules="rule"
        :model="repassword"
        label-position="left"
        class="repassword"
        label-width="80px"
      >
        <el-form-item label="手机号码" prop="phone">
          <el-input
            v-model="repassword.phone"
            class="repassword_input"
            clearable
            placeholder="手机号码"
          />
        </el-form-item>
      </el-form>
      <Vcode :show="isShow" @onSuccess="onSuccess()" @onClose="onClose()" />
      <el-button class="form_login_btn" type="primary" @click="handleverify()">verify</el-button>
      <el-button
        :loading="next_loading"
        class="form_login_btn"
        type="primary"
        @click="handlenext()"
      >下一步</el-button>
    </el-card>

    <!-- 下一步 -->
    <el-card v-if="nexttap" class="login_mian">
      <div class="login_title">重置密码</div>
      <el-form
        ref="repassword_form"
        :model="repassword_form"
        :rules="rule"
        label-position="left"
        class="repassword_form"
        label-width="80px"
      >
        <el-form-item label="短信验证" class="form_item" prop="code">
          <el-button
            v-show="btn_show"
            class="message_btn"
            type="primary"
            @click="handlenext()"
          >重新获取</el-button>
          <el-button v-show="!btn_show" :disabled="true" class="message_btn" type="primary" >{{ count }} s</el-button>

          <el-input v-model="repassword_form.code" maxlength="6" clearable placeholder="验证码" />
        </el-form-item>
        <el-form-item class="form_item" label="输入密码" prop="password">
          <el-input
            v-model="repassword_form.password"
            minlength="6"
            maxlength="12"
            clearable
            placeholder="长度应在6-12位"
          />
        </el-form-item>
        <el-form-item class="form_item" label="确认密码" prop="password">
          <el-input
            v-model="repassword_form.repassword"
            minlength="6"
            maxlength="12"
            clearable
            placeholder="再次输入密码"
          />
        </el-form-item>
      </el-form>

      <el-button
        :loading="loading"
        class="form_login_btn"
        type="primary"
        @click="handlerepassword()"
      >确认</el-button>
    </el-card>
    <div v-if="resuccess" class="success_bg">
      <div class="success_card">
        <div class="success_icon">
          <img class="imgsty" src="../../assets/success_icon.png" alt >
        </div>
        <div class="login_from_bottom">
          <div class="bottom_ltem fl">
            <span @click="gotolink('login')">重新登录</span>
          </div>
          <div class="bottom_ltem fr">
            <span @click="gotolink('showmain')">返回首页</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Vcode from 'vue-puzzle-vcode'

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
      btn_show: true, // 短信验证码按钮
      count: '',
      timer: null,
      next_loading: false,
      loading: false,
      repassword: {
        agree: true
      },
      baseurl: `${this.$store.state.BaseUrl}/user`,

      isShow: false, // 验证码模态框是否出现
      isVerify: false, // 是否完成验证
      repassword_form: {},
      nexttap: false,
      isreset: true, // 重新获取验证码
      resuccess: false, // 成功页面
      // 校验规则
      rule: {
        phone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { validator: checktel, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入正确验证码', trigger: 'blur' },
          { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
        ],
        password: [
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
    // 60s短信
    getCode() {
      const TIME_COUNT = 60
      if (!this.timer) {
        this.count = TIME_COUNT
        this.btn_show = false
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--
          } else {
            this.btn_show = true
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }
    },
    handlenext() {
      if (this.isVerify) {
        this.next_loading = true
        const phone = this.repassword.phone
        this.$axios
          .post(this.baseurl + '/get_phone_code', {
            phone,
            lx: 'wj'
          })
          .then(res => {
            if (res.data.code === 200) {
              this.getCode()
              this.nexttap = true
              this.msgalert('发送成功', 'success')
              this.codeVerify = true
            }
          })
      } else {
        this.next_loading = false

        this.$message({
          message: '请先成验证',
          type: 'warning'
        })
      }
    },
    handlerepassword() {
      const password = this.repassword_form.password
      const repassword = this.repassword_form.repassword
      const code = this.repassword_form.code
      const fzrlxdh = this.repassword.phone
      if (password === repassword) {
        this.loading = true
        this.$axios
          .post(this.baseurl + '/forget_password', {
            fzrlxdh,
            code,
            password
          })
          .then(res => {
            if (res.data.code === 200) {
              this.msgalert(res.data.msg, 'success')
              this.resuccess = true
              this.loading = false
            } else {
              this.loading = false
              this.msgalert(res.data.msg, 'error')
            }
          })
      } else {
        this.loading = false
        this.$message({
          message: '2次输入的密码不同哦！',
          type: 'error'
        })
      }
    },
    gotolink(res) {
      this.$router.replace({ path: `/${res}` })
    }
  }
}
</script>

<style lang="scss" scoped  >
.el-form-item__content {
  margin-left: 50px !important;
}
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
    .repassword {
      padding: 0 20px;
    }
    .form_item {
      margin-bottom: 20px;
      position: relative;
      // background-color: burlywood;
      .verify_btn {
        width: 220px;
      }
      .message_btn {
        position: absolute;
        right: 0;
        top: 0;
        z-index: 10;
      }
    }
    .check_inline {
      margin-top: 20px;
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
      width: 300px;
      margin: 0;
      margin-top: 20px;
    }
  }
  .success_card {
    z-index: 11;
    width: 400px;
    height: 350px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    .success_icon {
      width: 60px;
      height: 60px;
      margin: 0 auto;
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
  }
  .success_bg {
    z-index: 12;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    background: rgba(0, 0, 0, 0) url("../../assets/login/loginbg.png") no-repeat
      scroll 0% 0%;
  }
}
</style>
