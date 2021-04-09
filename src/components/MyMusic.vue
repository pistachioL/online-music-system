<template>
  <div>

    <NavMenu />
     <el-image style="width: 200px; height: 200px" :src="this.img" :fit="fit"> </el-image>

  <el-button type="primary" icon="el-icon-video-play" round>全部播放</el-button>

  <el-table :data="popularList" style="width: 100%" >
      <el-table-column label="歌曲" prop="data.song_name" >   </el-table-column>
   
      <el-table-column label="歌手"  prop="data.author_name"  > </el-table-column>

      <el-table-column label="专辑名" prop="data.album_name" > </el-table-column>

    <el-table-column label="播放时长" prop="data.timelength"  :formatter="msToMin"> </el-table-column>
       
  </el-table> 

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