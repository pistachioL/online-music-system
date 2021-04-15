<template>
  <div>
    <el-container>
      <!-- <el-header style="hegith:100px"> -->
      <NavMenu />
      <!-- </el-header> -->

      <el-main>
        <el-image style="width: 200px; height: 200px" v-loading="loading" :src="this.img"> </el-image>
        <el-button type="primary" icon="el-icon-video-play" v-on:click="playAll" round>全部播放</el-button>
        <el-table 
          :data="popularList"
          v-loading="loading"
          element-loading-text="努力加载飙升榜数据..."
          element-loading-spinner="el-icon-loading" 
          type="index"
          style="width: 100%" >
        
            <el-table-column label="序号" > 
              <template slot-scope="scope">
                {{scope.$index+1}}
              </template>
            </el-table-column>

            <el-table-column label="歌曲" prop="data.song_name" >   </el-table-column>

            <el-table-column label="歌手"  prop="data.author_name"  > </el-table-column>

            <el-table-column label="专辑名" prop="data.album_name" > </el-table-column>

            <el-table-column label="播放时长" prop="data.timelength"  :formatter="msToMin"> </el-table-column>
        
            <el-table-column label=" ">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="play(scope.row)" icon="el-icon-video-play"></el-button>
                </template>
            </el-table-column>
        </el-table>
      </el-main>

      <el-footer>
          <div class="hover">
          <aplayer :autoplay="true" :showLrc=true :music=playingSong :listMaxHeight=30> </aplayer>
          </div>
      </el-footer>
    </el-container>
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
        img: '',
        // repeat: 'no-repeat',

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
      indexMethod(index) {
        return index;
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
      // playAll() {
      //   this.repeat = 'repeat-all'
      //   console.log(11111)
      //   console.log(this.repeat)
      // }

    },

    mounted() {
      this.loading = true;
      axios
      .get(`http://localhost:9091/popularList`)
      .then(response => {
          this.loading = false;
          this.popularList = response.data
          this.img = response.data[0].data.img
          console.log(response)
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

  .hover{
    left: 0;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 100;
}
     
</style>