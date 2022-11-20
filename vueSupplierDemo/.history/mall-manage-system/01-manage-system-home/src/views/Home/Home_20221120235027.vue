<template>
  <div class="wrapper">
    <div class="btnGroup">
      <el-button type="primary" @click="showTable1">查看所有库存</el-button>
      <el-button type="primary" @click="showTable2">查看已完成订单</el-button>
      <el-button type="primary" @click="showTable3">查看未发货订单</el-button>
      <el-button type="primary" @click="showPetInfo"
        >更改宠物发货状态</el-button
      >
      <el-button type="primary" @click="showPetSuppliesInfo"
        >更改宠物用品发货状态</el-button
      >
    </div>
    <el-table
      :data="petInventory"
      v-if="showPetTable"
      stripe
      style="width: 100%"
    >
      <el-table-column
        prop="stockPetId"
        label="宠物序号"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="specie"
        label="宠物种类"
        width="180"
      ></el-table-column>
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
    <div class="table2" v-if="showCompletedTable">
      <el-table
        :data="completedOrder.petSuppliesOrder"
        stripe
        style="width: 100%"
      >
        <el-table-column
          prop="salesOrderId"
          label="宠物用品订单序号"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="salesProductsId"
          label="宠物用品序号"
          width="180"
        ></el-table-column>
        <el-table-column prop="salesAllPrice" label="宠物用品价格"></el-table-column>
        <el-table-column prop="petshopName" label="宠物用品产地"></el-table-column>
        <el-table-column prop="petshopPhone" label="宠物用品电话"></el-table-column>
        <el-table-column prop="petshopAddress" label="宠物用品产地具体地址"></el-table-column>
        <el-table-column prop="orderDate" label="宠物用品购买日期"></el-table-column>
        <el-table-column prop="petshopRemarks" label="宠物用品备注"></el-table-column>
      </el-table>
      <el-table
        :data="completedOrder.petOrder"
        stripe
        style="width: 100%"
      >
        <el-table-column
          prop="salesOrderId"
          label="宠物订单序号"
          width="180"
        ></el-table-column>
        <el-table-column
          prop="salesPetId"
          label="宠物序号"
          width="180"
        ></el-table-column>
        <el-table-column prop="salesPetQuantity" label="宠物价格"></el-table-column>
        <el-table-column prop="salesPetPrice" label="宠物颜色"></el-table-column>
        <el-table-column prop="petshopId" label="宠物年龄"></el-table-column>
        <el-table-column prop="petshopName" label="宠物体重"></el-table-column>
        <el-table-column prop="petshopPhone" label="宠物身体状况"></el-table-column>
        <el-table-column prop="petshopAddress" label="宠物生日"></el-table-column>
        <el-table-column prop="quantity" label="宠物质量"></el-table-column>
        <el-table-column prop="source" label="宠物产地"></el-table-column>
        <el-table-column prop="purchaseDate" label="购买日期"></el-table-column>
        <el-table-column prop="remarks" label="备注"></el-table-column>
      </el-table>
    </div>
    <div class="table3" v-if="unfilledOrders"></div>
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
      showPetTable: false,
      showCompletedTable: false,
      unfilledOrders: false,
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
      completedOrder: {
        msg: "已完成订单获取成功",
        petSuppliesOrder: [
          {
            salesOrderId: 1,

            salesProductsId: 1,

            salesProductsQuantity: 18,

            salesProductsPrice: 50,

            petshopId: 2,

            petshopName: "Ross Logistic LLC",

            petshopPhone: "769-180-7818",

            petshopAddress: "554 Central Avenue",

            petshopRemarks: "iX86L2gTaQ",

            userOrderId: null,

            userName: null,

            userPhone: null,

            userAddress: null,

            userRemarks: null,

            orderDate: "2012-02-19T08:00:00",

            salesAllPrice: 1800,

            isDelivery: "1",
          },
        ],
        petOrder: [
          {
            salesOrderId: 1,

            salesPetId: 1,

            salesPetQuantity: 18,

            salesPetPrice: 50,

            petshopId: 2,

            petshopName: "Ross Logistic LLC",

            petshopPhone: "769-180-7818",

            petshopAddress: "554 Central Avenue",

            petshopRemarks: "iX86L2gTaQ",

            userOrderId: null,

            userName: null,

            userPhone: null,

            userAddress: null,

            userRemarks: null,

            orderDate: "2012-02-19T08:00:00",

            salesAllPrice: 1800,

            isDelivery: "1",
          },
        ],

        status: 200,
      },
      unshippedOrders: {
        msg: "已完成订单获取成功",
        petSuppliesOrder: [
          {
            salesOrderId: 2,

            salesProductsId: 2,

            salesProductsQuantity: 21,

            salesProductsPrice: 80,

            petshopId: 2,

            petshopName: "Ross Logistic LLC",

            petshopPhone: "769-180-7818",

            petshopAddress: "531 Central Avenue",

            petshopRemarks: "3D9GPh4Y5l",

            userOrderId: null,

            userName: null,

            userPhone: null,

            userAddress: null,

            userRemarks: null,

            orderDate: "2006-11-12T22:42:11",

            salesAllPrice: 4200,

            isDelivery: "0",
          },
          {
            salesOrderId: 3,

            salesProductsId: 3,

            salesProductsQuantity: 17,

            salesProductsPrice: 120,

            petshopId: 2,

            petshopName: "Ross Logistic LLC",

            petshopPhone: "769-180-7818",

            petshopAddress: "554 Central Avenue",

            petshopRemarks: "czx7g4FczG",

            userOrderId: null,

            userName: null,

            userPhone: null,

            userAddress: null,

            userRemarks: null,

            orderDate: "2015-08-15T03:20:27",

            salesAllPrice: 5100,

            isDelivery: "0",
          },
          {
            salesOrderId: 4,

            salesProductsId: 5,

            salesProductsQuantity: 41,

            salesProductsPrice: 180,

            petshopId: 2,

            petshopName: "Ross Logistic LLC",

            petshopPhone: "769-180-7818",

            petshopAddress: "554 Central Avenue",

            petshopRemarks: "IkcWZ8cSdu",

            userOrderId: null,

            userName: null,

            userPhone: null,

            userAddress: null,

            userRemarks: null,

            orderDate: "2020-09-03T16:50:02",

            salesAllPrice: 16400,

            isDelivery: "0",
          },
          {
            salesOrderId: 5,

            salesProductsId: 4,

            salesProductsQuantity: 62,

            salesProductsPrice: 210,

            petshopId: 2,

            petshopName: "Ross Logistic LLC",

            petshopPhone: "769-180-7818",

            petshopAddress: "554 Central Avenue",

            petshopRemarks: "l4zZRM2Ts7",

            userOrderId: null,

            userName: null,

            userPhone: null,

            userAddress: null,

            userRemarks: null,

            orderDate: "2020-12-28T16:53:54",

            salesAllPrice: 31000,

            isDelivery: "0",
          },
        ],
        petOrder: [
          {
            salesOrderId: 2,

            salesPetId: 2,

            salesPetQuantity: 21,

            salesPetPrice: 80,

            petshopId: 2,

            petshopName: "Ross Logistic LLC",

            petshopPhone: "769-180-7818",

            petshopAddress: "531 Central Avenue",

            petshopRemarks: "3D9GPh4Y5l",

            userOrderId: null,

            userName: null,

            userPhone: null,

            userAddress: null,

            userRemarks: null,

            orderDate: "2006-11-12T22:42:11",

            salesAllPrice: 4200,

            isDelivery: "0",
          },
          {
            salesOrderId: 3,

            salesPetId: 3,

            salesPetQuantity: 17,

            salesPetPrice: 120,

            petshopId: 2,

            petshopName: "Ross Logistic LLC",

            petshopPhone: "769-180-7818",

            petshopAddress: "554 Central Avenue",

            petshopRemarks: "czx7g4FczG",

            userOrderId: null,

            userName: null,

            userPhone: null,

            userAddress: null,

            userRemarks: null,

            orderDate: "2015-08-15T03:20:27",

            salesAllPrice: 5100,

            isDelivery: "0",
          },
          {
            salesOrderId: 4,

            salesPetId: 5,

            salesPetQuantity: 41,

            salesPetPrice: 180,

            petshopId: 2,

            petshopName: "Ross Logistic LLC",

            petshopPhone: "769-180-7818",

            petshopAddress: "554 Central Avenue",

            petshopRemarks: "IkcWZ8cSdu",

            userOrderId: null,

            userName: null,

            userPhone: null,

            userAddress: null,

            userRemarks: null,

            orderDate: "2020-09-03T16:50:02",

            salesAllPrice: 16400,

            isDelivery: "0",
          },
          {
            salesOrderId: 5,

            salesPetId: 4,

            salesPetQuantity: 62,

            salesPetPrice: 210,

            petshopId: 2,

            petshopName: "Ross Logistic LLC",

            petshopPhone: "769-180-7818",

            petshopAddress: "554 Central Avenue",

            petshopRemarks: "l4zZRM2Ts7",

            userOrderId: null,

            userName: null,

            userPhone: null,

            userAddress: null,

            userRemarks: null,

            orderDate: "2020-12-28T16:53:54",

            salesAllPrice: 31000,

            isDelivery: "0",
          },
        ],

        status: 200,
      },
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
    showTable1() {
      // console.log('1')
      this.showPetTable = !this.showPetTable;
      this.showCompletedTable = false;
      this.unfilledOrders = false;
    },
    showTable2() {
      // console.log('1')
      this.showPetTable = false;
      this.showCompletedTable = !this.showCompletedTable;
      this.unfilledOrders = false;
    },
    showTable3() {
      // console.log('1')
      this.showPetTable = false;
      this.showCompletedTable = false;
      this.unfilledOrders = !this.unfilledOrders;
    },
    showPetInfo() {},
    showPetSuppliesInfo() {},
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
