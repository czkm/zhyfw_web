<template>
  <div class="partner_main">
    <div class="partner_img">
      <img class="imgsty" src="../../assets/showindex/partner.png" alt="">
    </div>

    <div class="partner_contain">
      <div class="partner_contain_item">
        <img class="imgsty" src="../../assets/showindex/partner2.png" alt="">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped  >
.partner_img {
  height: 300px;
}
.partner_contain {
  height: 350px;
  // background-color: gainsboro;
  .partner_contain_item {
    height: 300px;
    margin: 50px auto;
    max-width: 1180px;
    // background-color: aquamarine;
  }
}
</style>
