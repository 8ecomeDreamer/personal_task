<script setup>
import { ref } from 'vue'
import Title from './Title.vue'
import Main from './Main.vue'
import Footer from './Footer.vue'


defineProps({
})

</script>

<template>
    <div class="common-layout">
    <main>
      <!-- <el-aside width="200px"><MapCom></MapCom></el-aside> -->
      <div class="wrapper">
        <header><Title></Title></header>
        <main><Main></Main></main>
        <footer class="footer"><Footer></Footer></footer>
      </div>
    </main>
  </div>
</template>

<style scoped>
  .wrapper .footer{
    width: 100%;
    /* margin-bottom: 2rem; */
  }
</style>
