<template>
    <div class="wrapper">
        <baidu-map :center="center" :zoom="zoom" @ready="handler" class="map"></baidu-map>
    </div>
</template>
  
  <script>
  export default {
    name: "mapCom",
    data() {
      return {
        center: {lng: 0, lat: 0},
        zoom: 3
      };
    },
    props: {
      input:String
    },
    created() {
    
    },
    mounted() {
      // console.log(this.input)

    },
    methods: {
        handler ({BMap, map}) {
            console.log(BMap, map)
            this.center.lng = 116.404
            this.center.lat = 39.915
            this.zoom = 15
        }

    },
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .wrapper{
    width: 100%;
    height: 100%;
    // background: black;
    .map{
      width: 100%;
      height: 100%;

    }
  }
</style>
  