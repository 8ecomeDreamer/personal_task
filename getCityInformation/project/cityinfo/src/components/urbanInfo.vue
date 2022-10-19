<template>
  <div class="urbanInfo">
    <el-container class="container">
      <el-header class="header">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-header>
      <el-main class="main">
        <section class="div1 item">
          <h4 class="title">General Information</h4>
          <div class="context">
            <div class="content">
              <span class="left">C</span>
              <span class="right">...........from</span>
            </div>
            <li class="content">
              <span class="left">C</span>
              <span class="right">...........from</span>
            </li>
            <li class="content">
              <span class="left">C</span>
              <span class="right">...........from</span>
            </li>
          </div>
        </section>
        <section class="div2 item">
          <h4 class="title">Economy</h4>
          <div class="context">
            <div class="content">
              <span class="left">C</span>
              <span class="right">...........from</span>
            </div>
            <li class="content">
              <span class="left">C</span>
              <span class="right">...........from</span>
            </li>
          </div>
        </section>
        <section class="div3 item">
          <h4 class="title">Society</h4>
          <div class="context">
            <div class="content">
              <span class="left">C</span>
              <span class="right">...........from</span>
            </div>
            <li class="content">
              <span class="left">C</span>
              <span class="right">...........from</span>
            </li>
          </div>
        </section>
        <section class="div4 item">
          <h4 class="title">Environment</h4>
          <div class="context">
            <div class="content">
              <span class="left">C</span>
              <span class="right">...........from</span>
            </div>
            <li class="content">
              <span class="left">C</span>
              <span class="right">...........from</span>
            </li>
          </div>
        </section>
        <section class="div5 item">
          <h4 class="title">Technology</h4>
          <div class="context">
            <div class="content">
              <span class="left">C</span>
              <span class="right">...........from</span>
            </div>
            <li class="content">
              <span class="left">C</span>
              <span class="right">...........from</span>
            </li>
          </div>
        </section>
        <section class="div6">
          <h4 class="h4">CityData</h4>
          <span class="span">...........from</span>
        </section>
        <section class="div7" id="mapContainer">
          <mapCom class="mapCom"></mapCom>
        </section>
      </el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </div>
</template>

<script>
import mapCom from "./mapCom.vue"

export default {
  name: "urbanInfo",
  data() {
    return {
      input: "",
    };
  },
  components:{
    mapCom
  },
  props: {},
  created() {
  },
  methods: {
  },
};
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
      grid-template-rows: repeat(9, 1fr);
      grid-column-gap: 10px;
      grid-row-gap: 10px;

      .item {
        padding: 0.5rem 1rem;
        overflow: scroll;
        border: 1px solid black;
        // display:flex;
        .title,
        .context {
          width: 100%;
        }
        .title {
          // height: 10%;
          margin-top: 0;
          margin-bottom: 10px;
        }
        .context {
          height: calc(~"100%-10%");
          .content {
            display: flex;
            justify-content: space-between;
            list-style: none;
            width: 100%;
            .left,
            .right {
            }
            .left {
            }
            .right {
              margin-top: 0.5rem;
            }
          }
        }

        &::-webkit-scrollbar {
          width: 0;
          height: 0;
          scrollbar-arrow-color: #6f6f6f;
        }

        &::-webkit-scrollbar-thumb {
          /*滚动条里面小方块*/
          border-radius: 0.5px;
          -webkit-box-shadow: inset 0 0 5px rgb(100, 100, 100);
          background: rgb(36, 45, 52);
          scrollbar-arrow-color: black;
        }

        &::-webkit-scrollbar-track {
          /*滚动条里面轨道*/
          -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0);
          border-radius: 0;
          background: rgba(12, 7, 7, 0);
        }
      }

      .div1 {
        grid-area: 1 / 1 / 4 / 4;
        // background: red;
      }

      .div2 {
        grid-area: 4 / 1 / 6 / 2;
        // background: blue;
      }

      .div3 {
        grid-area: 4 / 2 / 6 / 3;
        // background: cyan;
      }

      .div4 {
        grid-area: 6 / 1 / 8 / 2;
        // background: orange;
      }

      .div5 {
        grid-area: 6 / 2 / 8 / 3;
        // background: lawngreen;
      }

      .div6 {
        grid-area: 4 / 3 / 8 / 4;
        // background: indianred;
        padding: 0.5rem 1rem;
        overflow: scroll;
        border: 1px solid black;
        .h4{
          margin-top: 0;
          margin-bottom: 10px;
        }
        &::-webkit-scrollbar {
          width: 0;
          height: 0;
          scrollbar-arrow-color: #6f6f6f;
        }

        &::-webkit-scrollbar-thumb {
          /*滚动条里面小方块*/
          border-radius: 0.5px;
          -webkit-box-shadow: inset 0 0 5px rgb(100, 100, 100);
          background: rgb(36, 45, 52);
          scrollbar-arrow-color: black;
        }

        &::-webkit-scrollbar-track {
          /*滚动条里面轨道*/
          -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0);
          border-radius: 0;
          background: rgba(12, 7, 7, 0);
        }
      }

      .div7 {
        grid-area: 1 / 4 / 8 / 6;
        border: 1px solid black;
        // background: khaki;
        .mapCom{
          width: 100%;
          height: 100%;
          // background: black;
        }
      }
    }
  }
}
</style>
