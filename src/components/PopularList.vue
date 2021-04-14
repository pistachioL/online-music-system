<template>
  <div>

    <NavMenu />

  <el-image style="width: 200px; height: 200px" v-loading="loading" :src="this.img" :fit="fit"> </el-image>

  <el-button type="primary" icon="el-icon-video-play" round>全部播放</el-button>

  <el-table 
  :data="popularList"
  v-loading="loading"
   element-loading-text="努力加载飙升榜数据..."
   element-loading-spinner="el-icon-loading" style="width: 100%" >
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
import NavMenu from './NavMenu.vue'
import axios from 'axios';
import Aplayer from 'vue-aplayer'

  export default {
    components:{
      NavMenu,
      Aplayer
    },
    data() {
      return {
        drawer: false,
        innerDrawer: false,
        popularList: this.popularList,
        tmpPlayingSong: {
          title: '',
          author: '',
          url: '',
          pic: '',
          lrc: '',
        },
        playingSong: {},
        loading: false,
      }
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
      }
    },

    mounted() {
      this.loading = true;
      axios
      .get(`http://localhost:9091/popularList`)
      .then(response => {
          this.loading = false;
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