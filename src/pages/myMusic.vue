<template>
  <div>

   <!-- <el-image style="width: 200px; height: 200px" :src=""> </el-image> -->

  <el-button type="primary" icon="el-icon-video-play" round>全部播放</el-button>

  <el-table :data="songList" style="width: 100%" >
      <el-table-column label="歌曲" prop="title" >   </el-table-column>
   
      <el-table-column label="歌手"  prop="author"  > </el-table-column>

      <!-- <el-table-column label="专辑名" prop="data.album_name" > </el-table-column>

    <el-table-column label="播放时长" prop="data.timelength"  :formatter="msToMin"> </el-table-column> -->
       
  </el-table> 

</div>
</template>

<script>
import { mapActions,mapState } from 'vuex'  
import axios from 'axios';

  export default {
    
    components:{
  
    },
    data() {
     return {

       
      }
    },
    mounted() {
      //网易云推荐新歌
      axios
      .get(`https://autumnfish.cn/personalized/newsong`)
      .then(response => {
          this.personalizedSong = response.data
      })
    },
      computed: {
    ...mapState({
      songList: state => state.player.songList,
      
    })
  },
   
  
  };
</script>

<style>
 
  
  .el-aside {
    color: #333;
  }
</style>