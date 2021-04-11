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
    <el-table-column label=" ">
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="play(scope.row)">播放</el-button>
      </template>
    </el-table-column>

  </el-table> 
  
     <!-- <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">  点我打开 </el-button> -->




<!--<el-drawer-->
<!--  title="我是标题"-->
<!--  :visible.sync="drawer"-->
<!--  :with-header="false">-->
<!--  <span>我来啦!</span>-->
<!--</el-drawer>-->
    <el-footer height="-100px">
<!--      <aplayer autoplay :music="{-->
<!--        title: 'Preparation',-->
<!--        author: 'Hans Zimmer/Richard Harvey',-->
<!--        url: 'https://webfs.yun.kugou.com/202104111905/0ea47d21c8d60c18333cd917ffb0cd47/KGTX/CLTX001/ef2ec19104207672f7d17fc580b89b44.mp3',-->
<!--        pic: 'http://imge.kugou.com/stdmusic/20210408/20210408112113472979.jpg',-->
<!--        lrc: '[00:00.00]lrc here\n[00:01.00]aplayer',-->
<!--        theme: '#b7daff'-->
<!--      }">-->
<!--      </aplayer>-->
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
//     headers: { 
//       'content-type': 'application/x-www-form-urlencoded；charset=UTF-8'
//  },
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
        playingSong: {}
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
      axios
      .get(`http://localhost:9091/popularList`)
      .then(response => {
            console.log(response.data)
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