<template>
  <div id="app">

    <el-container >
      <el-header>
          <Topbar/>
      </el-header>
      <router-view></router-view> 
    </el-container>
  </div>
</template>

<script>

import Topbar from './components/NavMenu/topbar.vue'
export default {
  name: 'App',
  components:{
    Topbar,

  },
}
</script>



<style>
   /* .el-header {
    background-color:white;
    color: #333;
    line-height: 60px;
  } */
</style>
