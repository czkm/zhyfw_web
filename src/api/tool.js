exports.install = function(Vue, options) {
  // 封装用户弹窗
  // type:success/warning/info/error
  Vue.prototype.msgalert = function(title, type) {
    if (title && type) {
      this.$message({
        message: title,
        type
      })
    } else {
      this.$message({
        message: '表单信息错误',
        type: 'error'
      })
    }
  }
}
