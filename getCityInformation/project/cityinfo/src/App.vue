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
  width: 95rem;
  height: 42rem;
  /* background: black; */
}
</style>
