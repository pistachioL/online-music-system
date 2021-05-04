<template>
  <div>
    <el-main >
 
            <h1> 最近播放     {{this.recentPlayList.length}}首 </h1> 
                <el-button type="primary" icon="el-icon-video-play" round>全部播放</el-button>
                <el-button type="primary" icon="el-icon-star-on" round>收藏</el-button>
                <el-button type="primary"  :plain="true" @click="share" icon="el-icon-link" round>分享</el-button>
            
              <el-row>
                <el-col>
                  <el-table 
                    :data="recentPlayList"
                    type="index"
                    style="width: 100%">
                      <el-table-column label="序号" > 
                        <template slot-scope="scope">
                          {{scope.$index+1}}
                        </template>
                      </el-table-column>

                      <el-table-column label="歌曲" prop="title" >   </el-table-column>

                      <el-table-column label="歌手"  prop="author"> </el-table-column>

                      <el-table-column label="" prop="pic" > 
                        <template slot-scope="scope">
                          <img width="50px" height="50px"  :src="scope.row.pic" >
                        </template>
                      </el-table-column>

                      <el-table-column label=" ">
                          <template slot-scope="scope">
                            <el-button type="text" size="small" @click="play(scope.row)" icon="el-icon-video-play"></el-button>
                          </template>
                      </el-table-column>

                    <!-- 收藏功能 -->
                    <el-table-column prop="like" label="">
                        <template slot-scope="scope">
                          <img width="15px" height="15px" @click="collect(scope.$index, scope.row)" :src="scope.row.like == true ? collected : uncollected" >
                        </template>
                    </el-table-column>
                  </el-table>
                </el-col>
              </el-row>
      </el-main>

  </div>
</template>


<script>
import axios from 'axios';
  export default {
    components:{
      
    },
    data() {
      return {
        loading: false,
        img: '',
        tmpPlayingSong: {
          title: '',
          author: '',
          url: '',
          pic: '',
          lrc: '',
        },
        playingSong: {},
        uncollected:require('../assets/uncollected.png'), //未收藏
        collected:require('../assets/collected.png'),
        recentPlayList: this.recentPlayList,
   
      } 
    },
 
    methods:{
      msToMin(row) {
        let ms = row.timelength
        let min = Math.floor((ms/1000/60) << 0),
        sec = Math.floor((ms/1000) % 60);
        sec = sec.toString().padStart(2, "0");
        return min + ':' + sec
      },
      //点击播放按钮
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
      },
      //分享功能待完善
      share() {
         this.$message({
          message: '复制成功',
          type: 'success'
        });
      },

    },
    mounted() {
      //最近播放的歌曲
      axios
      .get(`http://localhost:9091/getRecentlyPlay?user=${localStorage.getItem('username')}`)
      .then(response =>{
          this.recentPlayList = response.data
            var obj = [];
          for(var i = 0; i < this.recentPlayList.length; i++) {
            obj.push(JSON.parse(this.recentPlayList[i]))
          }
       
          var arr = []
          for (var j = 0; j < obj.length; j++) {
              arr.push(obj[j])
          }
          this.recentPlayList = arr 
      }); 

    }
  };
</script>
<style scoped>

.el-main {
  height:1400px;
}
</style>