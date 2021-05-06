<template>
  <div>
  <el-tabs :tab-position="tabPosition" style="height: 1700px; margin-top:0px" >
    
    <el-tab-pane label="酷狗音乐">
      <el-image style="width: 200px; height: 200px" v-loading="loading" :src="this.img"> </el-image>
      <h1 style="width:400px; margin:-200px 250px 230px"> 酷狗飙升榜 </h1>   
      <div style="width:400px; margin:-100px 250px 60px">
        <el-button type="primary" icon="el-icon-video-play" round>全部播放</el-button>
        <el-button type="primary" icon="el-icon-star-on" round>收藏</el-button>
        <el-button type="primary"  :plain="true" @click="share" icon="el-icon-link" round>分享</el-button>
      </div>

      <el-row>
        <el-col>
          <el-table 
            :data="popularList" v-loading="loading" element-loading-text="努力加载飙升榜数据..."
            element-loading-spinner="el-icon-loading" type="index" style="width: 100%">
              <el-table-column label="序号" > 
                <template slot-scope="scope">
                  {{scope.$index+1}}
                </template>
              </el-table-column>

              <el-table-column label="歌曲" prop="data.song_name">  </el-table-column>

              <el-table-column label="歌手"  prop="data.author_name"> </el-table-column>

              <el-table-column label="专辑" prop="data.album_name" > </el-table-column>

              <el-table-column label="时长" prop="data.timelength" :formatter="msToMin"> </el-table-column>
          
              <el-table-column label="" >
                  <template slot-scope="scope">
                    <el-button type="text" size="medium" @click="play(scope.row)" icon="el-icon-video-play"></el-button>
                  </template>
              </el-table-column>

              <el-table-column prop="like" label="">
                  <template slot-scope="scope">
                    <img width="24px" height="24px" @click="collect(scope.$index, scope.row)" :src="scope.row.like == true ? collected : uncollected" >
                  </template>
              </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-tab-pane>


    <el-tab-pane label="酷狗音乐1">
      <el-row>
        <el-col>
          <el-table 
            :data="popularListDB" v-loading="loading" element-loading-text="努力加载飙升榜数据..."
            element-loading-spinner="el-icon-loading" type="index" style="width: 100%">
              <el-table-column label="序号" > 
                <template slot-scope="scope">
                  {{scope.$index+1}}
                </template>
              </el-table-column>

              <el-table-column label="歌曲" prop="song_name">  </el-table-column>

              <el-table-column label="歌手"  prop="author_name"> </el-table-column>

              <el-table-column label="专辑" prop="album_name" > </el-table-column>

              <el-table-column label="时长" prop="timelength" :formatter="msToMinDB"> </el-table-column> 
          
              <el-table-column label="" >
                  <template slot-scope="scope">
                    <el-button type="text" size="medium" @click="playDB(scope.row)" icon="el-icon-video-play"></el-button>
                  </template>
              </el-table-column>

              <el-table-column prop="like" label="">
                  <template slot-scope="scope">
                    <img width="24px" height="24px" @click="collecDB(scope.$index, scope.row)" :src="scope.row.like == true ? collected : uncollected" >
                  </template>
              </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-tab-pane>


      <!-- 网易云 -->
    <el-tab-pane label="网易云音乐">
       <el-row>
        <el-col>
          <el-table 
            :data="netEase "
            v-loading="loading" element-loading-text="努力加载飙升榜数据..." element-loading-spinner="el-icon-loading" 
            type="index" style="width: 100%">
            <el-table-column label="序号" > 
              <template slot-scope="scope">
                {{scope.$index+1}}
              </template>
            </el-table-column>

            <el-table-column label="歌曲" prop="name">  </el-table-column>

            <el-table-column label="歌手"  prop="song.artists[0].name"> </el-table-column>

            <el-table-column label="" prop="picUrl" > 
              <template slot-scope="scope">
                <img width="50px" height="50px" :src="scope.row.picUrl" >
              </template>
          </el-table-column>
        
            <el-table-column label="">
                <!-- <template slot-scope="scope"> -->
                  <el-button type="text" size="medium" icon="el-icon-video-play"></el-button>
                <!-- </template> -->
            </el-table-column>

            <el-table-column prop="like" label="">
                <template slot-scope="scope">
                  <img width="24px" height="24px" @click="collect(scope.$index, scope.row)" :src="scope.row.like == true ? collected : uncollected" >
                </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-tab-pane>

    <!-- 酷我音乐 -->
    <el-tab-pane label="酷我音乐">
       <el-row>
        <el-col>
          <el-table 
            :data="kuwo"
            v-loading="loading" element-loading-text="努力加载飙升榜数据..." element-loading-spinner="el-icon-loading" 
            type="index" style="width: 100%">
            <el-table-column label="序号" > 
              <template slot-scope="scope">
                {{scope.$index+1}}
              </template>
            </el-table-column>

            <el-table-column label="歌曲" prop="name">  </el-table-column>

            <el-table-column label="歌手"  prop="artist"> </el-table-column>

            <el-table-column label="" prop="pic" > 
              <template slot-scope="scope">
                <img width="50px" height="50px" :src="scope.row.pic" >
              </template>
          </el-table-column>
        
            <el-table-column label="">
                <template slot-scope="scope">
                  <el-button type="text" size="medium" @click="play(scope.row)" icon="el-icon-video-play"></el-button>
                </template>
            </el-table-column>
            <el-table-column prop="like" label="">
                <template slot-scope="scope">
                  <img width="24px" height="24px" @click="collect(scope.$index, scope.row)" :src="scope.row.like == true ? collected : uncollected" >
                </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>

    </el-tab-pane>
    <!-- qq音乐 -->
    <el-tab-pane label="qq音乐">
        <el-image style="width: 200px; height: 200px" v-loading="loading" :src="this.qqMusicImg"> </el-image>
       更新时间： {{this.qqMusic.data.date}}
       <el-row>
        <el-col>
          <el-table 
            :data="qqMusic.data.songlist"
            v-loading="loading" element-loading-text="努力加载飙升榜数据..." element-loading-spinner="el-icon-loading" 
            type="index" style="width: 100%">
            <el-table-column label="序号" > 
              <template slot-scope="scope">
                {{scope.$index+1}}
              </template>
            </el-table-column>

            <el-table-column label="歌曲" prop="data.songname">  </el-table-column>

            <el-table-column label="歌手"  prop="data.singer[0].name"> </el-table-column>
        
            <el-table-column label="">
                  <el-button type="text" size="medium" icon="el-icon-video-play"></el-button>
            </el-table-column>
            <el-table-column prop="like" label="">
                <template slot-scope="scope">
                  <img width="24px" height="24px"  :src="scope.row.like == true ? collected : uncollected" >
                </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-tab-pane>
  </el-tabs> 

  </div>
</template>


<script>
import axios from 'axios';
import Aplayer from 'vue-aplayer'
import { mapState, mapMutations, mapActions } from 'vuex'
  export default {
    components:{
      Aplayer
    },
    data() {
      return {
        tabPosition: 'left',
        netEase: this.netEase,
        popularList: this.popularList, //酷狗音乐
        popularListDB: this.popularListDB, //已存储的酷狗音乐
        kuwo:this.kuwo,//酷我音乐
        qqMusic:this.qqMusic,
        loading: false, 
        img: '',
        qqMusicImg:'', //qq音乐图
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
    computed: {
      ...mapState({
        currentName: state => state.user.currentUser,
      }),
       
    },
    methods:{
      msToMin(row) {
        let ms = row.data.timelength
        let min = Math.floor((ms/1000/60) << 0),
        sec = Math.floor((ms/1000) % 60);
        sec = sec.toString().padStart(2, "0");
        return min + ':' + sec
      },
      msToMinDB(row) {
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
      
        //存入缓存
        axios
        .post(`http://localhost:9091/setRecentlyPlay?user=${localStorage.getItem('username')}&play=${JSON.stringify(this.playingSong)}`)
        .then(response=>{
            console.log(response)
        })
      },

      playDB(row){
        const song = row
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

      collect(index, row) {
        this.popularList[index].like = row.like === false ? true : false;
        if(row.like == true) {
          var songId = row.Id
          axios
          .post(`http://localhost:9091/addCollection?user=${this.currentName}&songId=${songId}`)
          .then(response => {
              console.log(response)
          });
          this.$message({
          message: '收藏成功',
          type: 'success'
          });
        }
        else {
          var songId = row
          axios
          .post(`http://localhost:9091/cancelCollection?user=${this.currentName}&songId=${songId}`)
          .then(response => {
              console.log("取消收藏",response)
          });
          this.$message({
            message: '取消收藏',
          });
        }
      },
      collecDB(index, row) {
        this.popularListDB[index].like = row.like === false ? true : false;
        if(row.like == true) {
          var songId = row.Id
          console.log(row)
          axios
          .post(`http://localhost:9091/addCollection?user=${this.currentName}&songId=${songId}`)
          .then(response => {
              console.log(response)
          });
          this.$message({
          message: '收藏成功',
          type: 'success'
          });
        }
        else {
          var songId = row.Id
          console.log("歌曲id：",songId)
          axios
          .post(`http://localhost:9091/cancelCollection?user=${this.currentName}&songId=${songId}`)
          .then(response => {
              console.log("取消收藏",response)
          });
          this.$message({
            message: '取消收藏',
          });
        }
  
      },
    },

    mounted() {
      this.loading = true;
      axios
      .get(`http://localhost:9091/popularList`)
      .then(response => {
          this.loading = false;
          this.popularList = response.data
          this.img = this.popularList[0].data.img
          console.log("酷狗音乐:",this.popularList)
      });

      //酷狗DB
      axios
      .get(`http://localhost:9091/popularListDB`)
      .then(response => {
          this.loading = false;
          this.popularListDB = response.data
          console.log("酷狗音乐DB:",this.popularListDB)
      });
      

   // 网易云api
      axios
      .get(`https://autumnfish.cn/personalized/newsong?limit=20`)
      .then(response => {
          this.loading = false;
          this.netEase = response.data.result
          console.log("网易云数据:",this.netEase)
      });

    //酷我音乐
      axios
      .get(`http://localhost:9091/kuwoPopularList`)
      .then(response => {
          this.loading = false;
          this.kuwo = response.data.data.musicList
          console.log("酷我:",this.kuwo.data.musicList)
      });

    //qq音乐
       axios
       .get(`http://localhost:9091/qqPopularList`)
      .then(response => {
          this.loading = false;
          this.qqMusic = response
          this.qqMusicImg = response.data.topinfo.pic
          console.log("qq音乐:",this.qqMusic)
      });

     
    }
  };
</script>



<style>

</style>