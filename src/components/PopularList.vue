<template>
  <div>

    <NavMenu />
   
       <el-image style="width: 200px; height: 200px" :src="this.img" :fit="fit"> </el-image>

  <el-button type="primary" icon="el-icon-video-play" round>全部播放</el-button>

  <el-table :data="popularList" style="width: 100%" >
      <el-table-column label="歌曲" prop="data.song_name" > </el-table-column>
 
      <el-table-column label="歌手"  prop="data.author_name"  > </el-table-column>

      <el-table-column label="专辑名" prop="data.album_name" > </el-table-column>

    <el-table-column label="播放时长" prop="data.timelength" > </el-table-column>
       
  </el-table>



</div>
</template>

<script>
import NavMenu from './NavMenu.vue'
import axios from 'axios';

  export default {
    headers: { 
'content-type': 'application/x-www-form-urlencoded；charset=UTF-8'
 },
    components:{
      NavMenu,
    },
    data() {
      return {
        popularList: this.popularList,
    
        
   
      }
    },
    methods:{
        msToMin(ms) {
          let min = Math.floor((ms/1000/60) << 0),
          sec = Math.floor((ms/1000) % 60);
          return min + ':' + sec
        }
    },
    mounted() {
      axios
      .get(`http://localhost:9091/popularList`)
      .then(response => {
       //   this.popularList = JSON.stringify(response.data).toString().replace(new RegExp("\\\\\"","gm"),"\"")
          this.popularList = response.data
          this.img = response.data[0].data.img
      })
    }
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