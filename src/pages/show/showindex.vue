<template>
  <div class="showindex">
    <navitop/>
    <div class="router_class">
      <router-view/>
    </div>
    <navibottom/>

  </div>
</template>

<script type="text/ecmascript-6">
import navitop from '../../components/naviTop.vue'
import navibottom from '../../components/naviBottom.vue'

export default {
  name: '',
  components: {
    navitop,
    navibottom
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped  >
.router_class {
  min-height: 500px;
  margin-top: 45px;
}
</style>
