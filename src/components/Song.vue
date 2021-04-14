<template>
  <div>

    <NavMenu />

        

  <el-image style="width: 200px; height: 200px" v-loading="loading" :src="this.img" :fit="fit"> </el-image>

  <el-button type="primary" icon="el-icon-video-play" round>全部播放</el-button>

  <el-table :data="searchRes"
   v-loading="loading"
   element-loading-text="拼命加载中"
   element-loading-spinner="el-icon-loading"
  style="width: 100%" >
      <el-table-column label="歌曲" prop="data.song_name" >   </el-table-column>

      <el-table-column label="歌手"  prop="data.author_name"  > </el-table-column>

      <el-table-column label="专辑名" prop="data.album_name" > </el-table-column>

    <el-table-column label="播放时长" prop="data.timelength"  :formatter="msToMin"> </el-table-column>
    <el-table-column label=" ">
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="play(scope.row)">播放</el-button>
      </template>
    </el-table-column>

  </el-table>

    <el-footer height="-100px">

      <aplayer :autoplay="true" :music=playingSong>
      </aplayer>
    </el-footer>
</div>
</template>



<script>
import axios from 'axios'
import NavMenu from './NavMenu.vue'

  export default {
    components:{
      NavMenu,
    },
    data() {
      return {
         keyword: "",
         searchRes: [],
         loading: false,
         img: ''
      }
    },
    mounted: function () {
      this.keyword = this.$route.params.keyword
      this.loading = true;
      axios
      .get(`http://localhost:9091/search?keyword=${this.keyword}`)
      .then(response => {
          this.loading = false;
          this.searchRes = response.data
          this.img = this.searchRes[0].data.img 
      });
     

    },
    methods:{
      msToMin(row) {
        let ms = row.data.timelength
        let min = Math.floor((ms/1000/60) << 0),
        sec = Math.floor((ms/1000) % 60);
        sec = sec.toString().padStart(2, "0");
        return min + ':' + sec
      },
      play(row){
        const song = row.data
        console.log('song', song)
        this.tmpPlayingSong.author = song.author_name
        this.tmpPlayingSong.title = song.song_name
        this.tmpPlayingSong.url = song.play_url
        this.tmpPlayingSong.lrc = song.lyrics
        this.tmpPlayingSong.pic = song.img
        this.playingSong = JSON.parse(JSON.stringify(this.tmpPlayingSong))
      },
      
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