<template>
  <div>

    <NavMenu />
   

</div>
</template>

<script>
import NavMenu from './NavMenu.vue'
  export default {
    
    components:{
      NavMenu,
    },
   
  
  };
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>