<template>
  <div>
  <el-tabs :tab-position="tabPosition" style="height: 1700px; margin-top:-50px" >
    
    <el-tab-pane label="酷狗音乐">
        <el-image style="width: 200px; height: 200px" v-loading="loading" :src="this.img"> </el-image>
        <h1 style="width:400px; margin:-200px 250px 230px"> 酷狗飙升榜 </h1>
        <div style="width:400px; margin:-100px 250px 60px">
          <el-button type="primary" icon="el-icon-video-play" round>全部播放</el-button>
          <el-button type="primary" icon="el-icon-star-on" round>收藏</el-button>
          <el-button type="primary"  :plain="true" @click="share" icon="el-icon-link" round>分享</el-button>
        </div>

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

            <el-table-column label="专辑" prop="data.album_name" > </el-table-column>

            <el-table-column label="时长" prop="data.timelength" :formatter="msToMin"> </el-table-column>
        
            <el-table-column label=" ">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="play(scope.row)" icon="el-icon-video-play"></el-button>
                </template>
            </el-table-column>

             <el-table-column label=" ">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="collect(scope.row)">  
                    <img width="15px" height="15px" :src="isCollected? collected  : uncollected" > 
                  </el-button>
                </template>
            </el-table-column>
        </el-table>

     <!-- 分页 -->
      <el-pagination 
        :page-size="10"
        :pager-count="10"
        layout="prev, pager, next"
        :total="this.popularList.length">
      
    
     </el-pagination>


    </el-tab-pane>
    <el-tab-pane label="网易云音乐"></el-tab-pane>
    <el-tab-pane label="QQ音乐"> </el-tab-pane>
    <el-tab-pane label="咪咕音乐"></el-tab-pane>
    <el-tab-pane label="酷我音乐"></el-tab-pane>

 
  </el-tabs>

  </div>
</template>
<script>
import axios from 'axios';
import Aplayer from 'vue-aplayer'
import { mapGetters, mapMutations, mapActions } from 'vuex'
  export default {
    components:{
      Aplayer
    },
    data() {
      return {
        tabPosition: 'left',
        popularList: this.popularList,
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
        isCollected: false,
        uncollected:require('../assets/uncollected.png'),
        collected:require('../assets/collected.png')

        } 
    },
    computed:{
       
    },
    methods:{
      msToMin(row) {
        let ms = row.data.timelength
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

      //todo:收藏功能待完善
      collect() { 
        if(this.isCollected == false) {
          this.isCollected = true;
        } 
        else{
          this.isCollected = false;
        }
      }
    },
    mounted() {
      this.loading = true;
      axios
      .get(`http://localhost:9091/popularList`)
      .then(response => {
          this.loading = false;
          this.popularList = response.data
          console.log(this.popularList)
          this.img = response.data[0].data.img
      })
    }
  };
</script>



<style>

  .hover{
    left: 0;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 100;
  } 
</style>