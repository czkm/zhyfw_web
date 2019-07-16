<template>
  <div class="mapbox">
    <baidu-map
      :center="center"
      :zoom="zoom"
      style="height:400px"
      @ready="handler"
      @click="getClickInfo">
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"/>
      <bm-map-type
        :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
        anchor="BMAP_ANCHOR_TOP_LEFT"/>
      <bm-geolocation :show-address-bar="true" :auto-location="true" anchor="BMAP_ANCHOR_BOTTOM_RIGHT"/>
      <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"/>
    </baidu-map>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: '',
  data() {
    return {
      center: '北京',
      // center: { lng: 0, lat: 0 },
      zoom: 16
    }
  },
  mounted: function() {
    // this.enableScrollWheelZoom(true);
  },
  methods: {
    handler({ BMap, map }) {
      // console.log(BMap, map)
      this.center = '福建省泉州市丰泽街道博后路374号芳源综合楼'
      // this.center.lng = 113.822348
      // this.center.lat = 22.635538
      this.zoom = this.zoom
    },
    getClickInfo(e) {
      // console.log(e.point.lng)
      // console.log(e.point.lat)
      this.center.lng = e.point.lng
      this.center.lat = e.point.lat
    }
  }
}
</script>

<style lang="scss" scoped  >
.bm-view {
  width: 430px;
  height: 400px;
  // background-color: brown;
}
</style>
