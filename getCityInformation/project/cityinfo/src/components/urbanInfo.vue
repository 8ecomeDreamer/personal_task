<template>
  <div class="urbanInfo">
    <el-container class="container">
      <el-header class="header">
        <el-input v-model="input" placeholder="请输入内容" @change="sendRequest()"></el-input>
      </el-header>
      <el-main class="main">
        <section class="div1 item" @click="test()">
          <h4 class="title">General Information</h4>
          <div class="context">
            <div class="content"   v-for="(item, index) in this.time" :key="index">
              <p class="left"><span>目前城市属于:</span>{{&nbsp;&nbsp;}} <span style="font-weight:bold;">{{item.country}}</span></p>
              <p class="left"><span>所在时区属于:</span>{{&nbsp;&nbsp;}} <span style="font-weight:bold;">{{item.timeZone}}</span></p>
              <p class="left"><span>当前时间为:</span>{{&nbsp;&nbsp;}} <span style="font-weight:bold;">{{item.strtime}}</span></p>
              <!-- <p class="right">...........from  <span class="hightlight"></span></p> -->
            </div>
          </div>
        </section>
        <section class="div2 item">
          <h4 class="title">Weather</h4>
          <div class="context">
            <div class="content"  v-for="(item, index) in this.weather" :key="index">
              <span style="font-weight:bold;">{{item.week}}</span>{{&nbsp;}}{{&nbsp;}}
              <span style="font-weight:bold;">{{item.weather}}</span>
              <p class="left">{{item.tips}}</p>
              <!-- <p class="right">...........from  <span class="hightlight"></span></p> -->
            </div>
          </div>
        </section>
        <section class="div3 item">
          <h4 class="title">Sunset</h4>
          <div class="context">
            <div class="content"  v-for="(item, index) in this.sunset" :key="index">
              <p class="left"  style="font-weight:bold;">{{item.data_time}}</p>
              <p class="">
                <span>日出时间为:</span>{{&nbsp;}}{{&nbsp;}}<span style="font-weight:bold;">{{item.sunrise}}</span>{{&nbsp;}}{{&nbsp;}}
                <span>日落时间为:</span>{{&nbsp;}}{{&nbsp;}}<span style="font-weight:bold;">{{item.sunset}}</span>
                
              </p>
            </div>
          </div>
        </section>
        <section class="div4 item">
          <h4 class="title">Environment</h4>
          <div class="context">
            <div class="content" v-for="(item, index) in this.environment" :key="index">
              <p class="left"> 城市下属区: <span class="hightlight">{{item.name}}</span></p>
              <p class="right"> 空气质量为: <span class="hightlight"> {{item.aqi_level}} </span></p>
            </div>
          </div>
        </section>
        <section class="div5 item">
          <h4 class="title">tailRestrictions</h4>
          <div class="context">
            <div
              class="content"
            >
              <p class="left">{{ this.tailRestrictions.limitRule }}</p>
              <span class="right" v-show="!inputEmpty" >限行区域:  <span class="hightlight">{{ this.tailRestrictions.limitArea }}</span></span>
            </div>
          </div>
        </section>
        <section class="div6">
          <h4 class="h4">CityData</h4>
          <!-- 某（市区县级行政区）、城市天气ID和行政区划类型等信息 -->
          <div class="wrapper"  v-for="(item, index) in this.cityData" :key="index">
            <span class="span">城市:<span class="hightlight"> {{ item.citycn }}</span> </span>
            <span class="span">省份:<span class="hightlight"> {{ item.provincecn }}</span> </span>
            <p class="p">行政区划代码:<span class="hightlight"> {{ item.areaid }}</span> </p>
            <span class="span">经度：<span class="hightlight"> {{ item.longitude }}</span> </span>
            <span class="span">维度：<span class="hightlight"> {{ item.latitude }}</span> </span>
          </div>

          <!-- <p class="p">...........from  <span class="hightlight" v-if="this.input.length === 0">天行数据</span></p> -->
        </section>
        <section class="div7" id="mapContainer">
          <mapCom class="mapCom" :input="input"></mapCom>
        </section>
      </el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </div>
</template>

<script>
import mapCom from "./mapCom.vue";
// 引入 axios
import axios from "axios";

export default {
  name: "urbanInfo",
  data() {
    return {
      input: "",
      tailRestrictions: [],
      cityData:[],
      weather:[],
      sunset:[],
      time:[],
      environment:[],
      inputEmpty:true
    };
  },
  watch:{
    inputEmpty:function(){
      if(this.input!=""||this.input!=null){
        this.inputEmpty = false
      }
      else{
        this.inputEmpty = true
      }
    }
  },
  components: {
    mapCom,
  },
  props: {},
  beforeCreate() {
    // console.log('111')
    //  获取id
    axios.post(`http://api.tianapi.com/citylookup/index?key=83dca344f80b02a5e4238bad4c0903d9&area=${this.input}`)
    .then((response) => {
      // this.cityData = response.data.newslist
      console.log(response);
      // 将id等信息存储至客户端
      localStorage.setItem('cityData',JSON.stringify(response.data.newslist))
    })
    .catch(function (error) {
      console.log(error);
    });
   

  
    
  },
  methods: {
    // 发送数据 
    sendRequest(){
      // 天行数据
      //  发送请求
      this.getCityData();
      this.getTailRestrictions();
      this.getWeather();
      this.getEnvironment();
      this.getSunset();
      this.getTime()
      // console.log(this.input)
    },
    test(){
      // this.getTailRestrictions();
      // console.log( JSON.parse(localStorage.getItem("cityData")) )
      // //  获取城市id
      // let cityDataid = JSON.parse(localStorage.getItem("cityData"))[0].areaid.substring(2)
      // console.log(cityDataid)
    },
    // 天行数据
    // general information
    async getCityData() {
      if (this.input.trim() != "") {
        await axios.post(`http://api.tianapi.com/citylookup/index?key=83dca344f80b02a5e4238bad4c0903d9&area=${this.input}`)
        .then((response) => {
          this.cityData = response.data.newslist
          console.log(this.cityData);
          // localStorage.setItem('cityData',JSON.stringify(this.cityData))
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      
    },
    // apispace
    async getTailRestrictions() {
      // let temp = JSON.parse(localStorage.getItem('cityData'))
      // console.log(temp)
      let cityDataid = JSON.parse(localStorage.getItem("cityData"))[0].areaid.substring(2)
      console.log(cityDataid)
      if (this.input.trim() != "") {
      await axios.get(`as/5345645/lives_geo/v001/xianxing`,{
        headers:{
          "X-APISpace-Token":"pq9db0v0aqfja0uoc99zx7dokah71oq0",
          "Authorization-Type":"apikey",
          "Content-Type":"application/json;charset=UTF-8"
          },
          params:{
            "areacode":cityDataid,
            "days":15
          }
      }
      ).then( (response) => {
          this.tailRestrictions = response.data.result.traffic
          console.log( this.tailRestrictions);
          // localStorage.setItem('technology',JSON.stringify(response.data.newslist))
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    },
    
    // 天行数据
    async getWeather() {
      if (this.input.trim() != "") {
      let cityDataid = JSON.parse(localStorage.getItem("cityData"))[0].areaid.substring(2)
      console.log(cityDataid)
      await axios.get(`http://api.tianapi.com/tianqi/index?key=83dca344f80b02a5e4238bad4c0903d9&city=${cityDataid}&type=7 `)
        .then( (response) => {
          this.weather = response.data.newslist
          console.log(this.weather);
          // localStorage.setItem('cityId',JSON.stringify(response.data.newslist[0].areaid))
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    },
    // apispace
    async getEnvironment(){
      let cityDataid = JSON.parse(localStorage.getItem("cityData"))[0].areaid.substring(2)
      if (this.input.trim() != "") {
      await axios.get(`as/34324/air/v001/aqi`,{
        headers:{
          "X-APISpace-Token":"pq9db0v0aqfja0uoc99zx7dokah71oq0",
          "Authorization-Type":"apikey",
          "Content-Type":"application/json;charset=UTF-8"
          },
          params:{
            "areacode":cityDataid
          }
      }
      ).then( (response) => {
          this.environment = response.data.result.realtimeAqi.stations
          // console.log(response);
          // localStorage.setItem('technology',JSON.stringify(response.data.newslist))
        })
        .catch(function (error) {
          console.log(error);
        });
      }
       
    },
    // apispace
    async getSunset(){
      let cityDataid = JSON.parse(localStorage.getItem("cityData"))[0].areaid.substring(2)
      if (this.input.trim() != "") {
      await axios.get(`as/ewre/lives_geo/v001/sun`,{
        headers:{
          "X-APISpace-Token":"pq9db0v0aqfja0uoc99zx7dokah71oq0",
          "Authorization-Type":"apikey",
          "Content-Type":"application/json;charset=UTF-8"
          },
          params:{
            "days":15,
            "areacode":cityDataid
          }
      }
      ).then( (response) => {
          this.sunset = response.data.result.sunrises
          // console.log(response);
          // localStorage.setItem('technology',JSON.stringify(response.data.newslist))
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    },
    // console.log(axios)
    // 天行数据
    async getTime(){
      if (this.input.trim() != "") {
      await axios.get(`http://api.tianapi.com/worldtime/index?key=83dca344f80b02a5e4238bad4c0903d9&city=${this.input} `)
        .then( (response) => {
          this.time = response.data.newslist
          console.log(response);
          // localStorage.setItem('cityId',JSON.stringify(response.data.newslist[0].areaid))
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    },
    // async getCityId(){
    //   if (this.input.trim() != "") {
    //     await axios.post(`http://api.tianapi.com/citylookup/index?key=83dca344f80b02a5e4238bad4c0903d9&area=${this.input}`)
    //     .then((response) => {
    //       // this.cityData = response.data.newslist
    //       console.log(response);
    //       localStorage.setItem('cityData',response.data.newslist)
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    //   }
    // }
  }
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
    // background: blue;
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
          margin-bottom: 5px;
        }
        .context {
          height: calc(~"100%-10%");
          .content {
            // display: flex;
            // justify-content: space-between;
            list-style: none;
            width: 100%;
            font-size: 13px;
            margin-bottom: 12px;
            .left,
            .right {
            }
            .left {
              text-align: left;
            }
            .right {
              text-align: right;
              .hightlight{
                color: red;
              }
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
        .context{
          .left{
            margin-bottom: 0;
          }
          .right{
            margin-top: 0;
          }
        }
      }

      .div6 {
        grid-area: 4 / 3 / 8 / 4;
        // background: indianred;
        padding: 0.5rem 1rem;
        overflow: scroll;
        border: 1px solid black;
        .h4 {
          margin-top: 0;
          margin-bottom: 10px;
        }
        .wrapper{
          .p{
            text-align: left;
          }
          .span{
            margin-right: 1rem;
            display: inline-block;
            width: 100%;

            .hightlight{
              color: #f8b90a;
            }
          }
        }
        .p{
          text-align: right;
          .hightlight{
            color: #f8b90a;
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

      .div7 {
        grid-area: 1 / 4 / 8 / 6;
        border: 1px solid black;
        // background: khaki;
        .mapCom {
          width: 100%;
          height: 100%;
          // background: black;
        }
      }
    }
  }
}
</style>
