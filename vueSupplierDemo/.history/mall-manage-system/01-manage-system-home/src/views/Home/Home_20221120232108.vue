<template>
  <div class="wrapper">
    <div class="btnGroup">
      <el-button type="primary" @click="showTable">查看所有库存</el-button>
      <el-button type="primary" @click="showTable">查看已完成订单</el-button>
      <el-button type="primary" @click="showTable">查看未发货订单</el-button>
      <el-button type="primary" @click="showPetInfo"
        >更改宠物发货状态</el-button
      >
      <el-button type="primary" @click="showPetSuppliesInfo"
        >更改宠物用品发货状态</el-button
      >
    </div>
    <el-table :data="petInventory" stripe style="width: 100%">
      <el-table-column prop="stockPetId" label="宠物序号" width="180"></el-table-column>
      <el-table-column prop="specie" label="宠物种类" width="180"></el-table-column>
      <el-table-column prop="price" label="宠物价格"></el-table-column>
      <el-table-column prop="color" label="宠物颜色"></el-table-column>
      <el-table-column prop="age" label="宠物年龄"></el-table-column>
      <el-table-column prop="weight" label="宠物体重"></el-table-column>
      <el-table-column prop="health" label="宠物身体状况"></el-table-column>
      <el-table-column prop="birthday" label="宠物生日"></el-table-column>
      <el-table-column prop="quantity" label="宠物质量"></el-table-column>
      <el-table-column prop="source" label="宠物产地"></el-table-column>
      <el-table-column prop="purchaseDate" label="购买日期"></el-table-column>
      <el-table-column prop="remarks" label="备注"></el-table-column>
    </el-table>
  </div>
  <!-- <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px"> -->
  <!--shadow属性设置卡片阴影出现的时机-->
  <!-- <el-card shadow='hover'>
            <div class="user">
                <img :src="userImg"/>
                <div class="userinfo">
                    <p class="name">Admin</p>
                    <p class="access">超级管理员</p>
                </div>
            </div>
            <div class="login-info">
                <p>上次登录时间：<span>2019-10-20</span></p>
                <p>上次登录地点：<span>北京</span></p>
            </div>
        </el-card>
        <el-card style="height: 460px ; margin-top: 20px">
            <el-table :data="tableData">
                <el-table-column show-overflow-tooltip v-for="(val, key) in tableLabel" :key="key" :prop="key"
                                 :label="val"></el-table-column>
            </el-table>
        </el-card> -->
  <!-- </el-col> -->
  <!-- <el-col :span="16" style="margin-top: 20px">
            <div class="num">
                <el-card shadow="hover" v-for="item in countData" :key="item.name" :body-style="{ display: 'flex', padding: 0}">
                    <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
                    <div class="detail">
                        <p class="num">￥ {{ item.value }}</p>
                        <p class="txt">{{ item.name }}</p>
                    </div>
                </el-card>
            </div>
            <el-card shadow="hover" style="height: 280px">
            </el-card>
            <div class="graph">
                <el-card shadow="hover" style="height: 260px">
                </el-card>
                <el-card shadow="hover" style="height: 260px">
                </el-card>
            </div>
        </el-col>
    </el-row> -->
</template>

<script>
export default {
  data() {
    return {
      petInventory: [
        {
          stockPetId: 1,

          specie: "dog",

          price: 50,

          color: "Salmon",

          age: 6,

          weight: 9.36,

          health: "health",

          birthday: "2021-10-03",

          quantity: 68,

          source: "Roberts's Inc.",

          purchaseDate: "2021-03-06T06:40:39",

          remarks: "3Oj86qMznx",
        },
        {
          stockPetId: 2,

          specie: "dog",

          price: 80,

          color: "Lime",

          age: 12,

          weight: 6.64,

          health: "health",

          birthday: "2021-03-02",

          quantity: 55,

          source: "Christopher Technology Inc.",

          purchaseDate: "2021-05-07T08:57:28",

          remarks: "DFx8ZsTfq9",
        },
        {
          stockPetId: 3,

          specie: "cat",

          price: 90,

          color: "Beige",

          age: 44,

          weight: 10.95,

          health: "health",

          birthday: "2021-05-02",

          quantity: 72,

          source: "Payne Brothers Logistic LLC",

          purchaseDate: "2020-08-03T16:23:16",

          remarks: "SanN3e6xDB",
        },
        {
          stockPetId: 4,

          specie: "cat",

          price: 170,

          color: "Light Gray",

          age: 24,

          weight: 5.99,

          health: "health",

          birthday: "2021-09-17",

          quantity: 89,

          source: "Chris Food LLC",

          purchaseDate: "2019-11-08T23:36:01",

          remarks: "MsogvL00c1",
        },
        {
          stockPetId: 5,

          specie: "snake",

          price: 173,

          color: "Orange Red",

          age: 5,

          weight: 9.77,

          health: "health",

          birthday: "2020-07-11",

          quantity: 95,

          source: "Holmes Inc.",

          purchaseDate: "2022-07-26T18:28:12",

          remarks: "RuOOTrEjhj",
        },
      ],
      // userImg: require('../../assets/images/user.png'),
      // countData: [
      //     {
      //         name: '今日支付订单',
      //         value: 1234,
      //         icon: 'success',
      //         color: '#2ec7c9'
      //     },
      //     {
      //         name: '今日收藏订单',
      //         value: 210,
      //         icon: 'star-on',
      //         color: '#ffb980'
      //     },
      //     {
      //         name: '今日未支付订单',
      //         value: 1234,
      //         icon: 's-goods',
      //         color: '#5ab1ef'
      //     },
      //     {
      //         name: '本月支付订单',
      //         value: 1234,
      //         icon: 'success',
      //         color: '#2ec7c9'
      //     },
      //     {
      //         name: '本月收藏订单',
      //         value: 210,
      //         icon: 'star-on',
      //         color: '#ffb980'
      //     },
      //     {
      //         name: '本月未支付订单',
      //         value: 1234,
      //         icon: 's-goods',
      //         color: '#5ab1ef'
      //     }
      // ],
      // tableData: [],
      // tableLabel: {
      //     name: '课程',
      //     todayBuy: '今日购买',
      //     monthBuy: '本月购买',
      //     totalBuy: '总购买'
      // }
    };
  },
  methods: {
    // getTableData() {
    //     this.$http.get('/home/getData').then(res => {
    //         res = res.data
    //         this.tableData = res.data.tableData
    //     })
    // }
    showTable() {
      // console.log('1')
    },
  },
  //一进组件就会去请求后端接口 获取首页数据
  created() {
    // this.getTableData()
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/home";
</style>
