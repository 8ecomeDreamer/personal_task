<template>
  <div class="urbanInfo">
    <el-container class="container">
      <el-header class="header">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-header>
      <el-main class="main">
        <div class="div1"></div>
        <div class="div2"></div>
        <div class="div3"></div>
        <div class="div4"></div>
        <div class="div5"></div>
        <div class="div6"></div>
        <div class="div7"></div>

      </el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'urbanInfo',
  data() {
    return {
      input: ''
    }
  },
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.urbanInfo {
  width: 100%;
  height: 100%;
  // background-color: aqua;
  display: flex;
  justify-items: center;
  align-items: center;

  .container {
    width: 90%;
    height: 90%;

    .header {
      width: 80%;
      height: 20%;
      margin: 0 auto;
      // background-color: coral;  
    }

    .main {
      width: 100%;
      height: 80%;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(6, 1fr);
      grid-column-gap: 10px;
      grid-row-gap: 10px;

      .div1 {
        grid-area: 1 / 1 / 3 / 4;
        background: red;
      }

      .div2 {
        grid-area: 2 / 1 / 3 / 2;
        background: blue;

      }

      .div3 {
        grid-area: 2 / 2 / 3 / 3;
        background: cyan;

      }

      .div4 {
        grid-area: 3 / 1 / 4 / 2;
        background: orange;

      }

      .div5 {
        grid-area: 3 / 2 / 4 / 3;
        background: lawngreen;

      }

      .div6 {
        grid-area: 2 / 3 / 4 / 4;
        background: indianred;

      }

      .div7 {
        grid-area: 1 / 4 / 4 / 6;
        background: khaki;

      }


    }


  }




}
</style>
