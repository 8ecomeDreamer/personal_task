<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="wrapper">
      <UrbanInfo/>
    </div>
  </div>
</template>

<script>
import UrbanInfo from './components/UrbanInfo'

export default {
  name: 'App',
  components: {
    UrbanInfo
  }
}
</script>

<style scoped>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
  .wrapper{
    width:1873px;
    height:937px;
    /* background:black; */
  }
</style>
