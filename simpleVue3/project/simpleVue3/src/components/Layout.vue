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
    <el-container>
      <!-- <el-aside width="200px"><MapCom></MapCom></el-aside> -->
      <el-container>
        <el-header><Title></Title></el-header>
        <el-main><Main></Main></el-main>
        <el-footer><Footer></Footer></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>

</style>
