<template>
  <div>
    <el-container>
      <el-main>
      <el-row>
        <el-col :span="5">
            <el-image style="width: 200px; height: 200px" v-loading="loading" :src="this.img"> </el-image>
        </el-col>

        <el-col :span="10" >
           <h1>搜索结果 </h1> <span style="color:red"> {{this.keyword}} </span> <span style="color:grey">找到 {{searchRes.length}} 条结果  </span> <br><br><br>
            <el-button type="primary" icon="el-icon-video-play" round>全部播放</el-button>
            <el-button type="primary" icon="el-icon-star-on" round>收藏</el-button>
            <el-button type="primary"  :plain="true" @click="share" icon="el-icon-link" round>分享</el-button>
        </el-col>
      </el-row>

      <el-row>
        <el-col>
          <el-table :data="searchRes"
            v-loading="loading"
            element-loading-text="拼命加载中"
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

            <el-table-column prop="like" label="">
              <template slot-scope="scope">
                <img width="15px" height="15px" @click="collect(scope.$index, scope.row)" :src="scope.row.like == true ? collected : uncollected" >
              </template>
            </el-table-column>
            </el-table>
        </el-col>
      </el-row>
    
      </el-main>
   
  </el-container>
</div>
</template>



<script>
import axios from 'axios'
import Aplayer from 'vue-aplayer'
  export default {
    components:{
      Aplayer       
    },
    data() {
      return {
         keyword: "",
         searchRes: [],
         loading: false,
         img: "",
         artist: "",
         tmpPlayingSong: {
          title: '',
          author: '',
          url: '',
          pic: '',
          lrc: '',
        },
        playingSong: {},
        uncollected:require('../assets/uncollected.png'), //未收藏
        collected:require('../assets/collected.png')
      }
    },
    mounted: function () {
      this.keyword = this.$route.query.keyword
      console.log(this.keyword)
      this.loading = true;
      axios
      .get(`http://localhost:9091/search?keyword=${this.keyword}`)
      .then(response => {
          this.loading = false;
          this.searchRes = response.data
          this.img = this.searchRes[0].data.img 
          this.artist = this.searchRes[0].data.author_name
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
        this.tmpPlayingSong.author = song.author_name
        this.tmpPlayingSong.title = song.song_name
        this.tmpPlayingSong.url = song.play_url
        this.tmpPlayingSong.lrc = song.lyrics
        this.tmpPlayingSong.pic = song.img
        this.playingSong = JSON.parse(JSON.stringify(this.tmpPlayingSong))
        this.$store.dispatch('player/playAction')  //修改action
        this.$store.commit('player/playSong', this.playingSong);
        //存入缓存
        axios
        .post(`http://localhost:9091/setRecentlyPlay?user=${localStorage.getItem('username')}&play=${JSON.stringify(this.playingSong)}`)
        .then(response=>{
            console.log(response)
        })
      },
      //分享功能待完善
      share() {
         this.$message({
          message: '复制成功',
          type: 'success'
        });
      },
      
    },
   
  };
</script>

<style>

  
  .el-aside {
    color: #333;
  }

  .hover{
    left: 0;
    position: fixed;
    bottom: -10;
    width: 100%;
    z-index: 100;
}
  .el-row {
    margin-bottom: 50px;
  }
</style>