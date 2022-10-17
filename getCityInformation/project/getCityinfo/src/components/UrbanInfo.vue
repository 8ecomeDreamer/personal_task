<template>
  <div class="wrapper">
    <el-container>
      <el-header>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="20"><div class="grid-content bg-purple"></div></el-col>
          <!-- <el-col :span="8"><div class="grid-content bg-purple"></div></el-col> -->
        </el-row>
        <el-row :gutter="20">
            <el-row :gutter="16">
              <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
              <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
             <el-row :gutter="16">
              <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
              <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
            <el-row :gutter="4">
              <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    
            </el-row>
        </el-row>
        <!-- <el-row :gutter="20">
          <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        </el-row> -->
      </el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'UrbanInfo',
  data () {
    return {
      input: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>