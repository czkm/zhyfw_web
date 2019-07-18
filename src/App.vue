<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  beforeMount() {
    this.gettoken()
  },
  methods: {
    gettoken() {
      const token = localStorage.getItem('TOKEN')
      if (token) {
        this.$store.commit('set_token', token)
        console.log('token' + token)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fff;
  /* margin-top: 60px; */
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
body {
  margin: 0;
  padding: 0;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  /* overflow-y: hidden; */
  /* overflow: scroll; */
}

.fl {
  float: left;
}
.fr {
  float: right;
}
.imgsty {
  width: 100%;
  height: 100%;
  display: block;
}
.shadow {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.el-tabs__nav {
  /* background-color: #fff; */
}
.el_hr {
  width: 100%;
  height: 1px;
  background-color: #484b4717;
  position: relative;
}
.el-form-item {
  margin: 10px;
}
</style>
