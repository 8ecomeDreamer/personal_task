<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <urbanInfo />
  </div>
</template>

<script>
import urbanInfo from './components/urbanInfo.vue'

export default {
  name: 'App',
  components: {
    urbanInfo
  }
}
</script>

<style>
#app {
  width: 90rem;
  height: 40rem;
  margin: 0 auto;
  /* background: black; */
}
</style>
