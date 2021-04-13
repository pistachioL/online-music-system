<template>
  <div>
   <NavMenu />
    <el-input placeholder="搜索你想要听的歌曲" 
     @keyup.enter.native="onEnterPress"
     v-model="keyword"
     prefix-icon='el-icon-search'></el-input>

    <el-image style="width: 200px; height: 200px" :src="this.img" :fit="fit"> </el-image>

  <el-button type="primary" icon="el-icon-video-play" round>全部播放</el-button>

   <el-table :data="searchRes" style="width: 100%" >
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
     <aplayer :autoplay="true" :music=playingSong>
      </aplayer>
</div>
</template>


<script>
import axios from 'axios'
import Aplayer from 'vue-aplayer'
import NavMenu from './NavMenu.vue'
export default {
  data() {
    return {
      keyword: "",
      searchRes: [],
    }
  },
  mounted() {

   },
  components:{
      NavMenu,
      Aplayer,
        tmpPlayingSong: {
          title: '',
          author: '',
          url: '',
          pic: '',
          lrc: '',
        },
        playingSong: {}
    },
  methods: {
    onEnterPress() {
        axios
        .get(`http://localhost:9091/search?keyword=${this.keyword}`)
        .then(response => {
            console.log(111111)
            console.log(response.data)
            this.searchRes = response.data
        });
    },
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
  }
   
} 

</script>

 