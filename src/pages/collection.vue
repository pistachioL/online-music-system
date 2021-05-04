<template>
  <div>
    <el-main>
        <h1> 我的收藏 共{{collectList.length}}首 </h1>
        <el-button type="primary" icon="el-icon-video-play" round>全部播放</el-button>
        <el-button type="primary" icon="el-icon-star-on" round>收藏</el-button>
        <el-button type="primary"  :plain="true" @click="share" icon="el-icon-link" round>分享</el-button>
      
        <el-table 
            :data="collectList"
            v-loading="loading"
            element-loading-text="努力加载飙升榜数据..."
            element-loading-spinner="el-icon-loading" 
            type="index"
            style="width: 100%">
        
            <el-table-column label="序号" > 
                <template slot-scope="scope">
                {{scope.$index+1}}
                </template>
            </el-table-column>

            <el-table-column label="歌曲" prop="song_name" >   </el-table-column>

            <el-table-column label="歌手"  prop="author_name"  > </el-table-column>

            <el-table-column label="专辑" prop="album_name" > </el-table-column>

            <el-table-column label="时长" prop="timelength" :formatter="msToMin"> </el-table-column>
        
            <el-table-column label="">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="play(scope.row)" icon="el-icon-video-play"></el-button>
                </template>
            </el-table-column>


          <el-table-column prop="like" label="">
              <template slot-scope="scope">
                <img width="24px" height="24px" :src="isDelete" @click="uncollect(scope.$index, scope.row)" >
             </template>
          </el-table-column>
        </el-table>
    </el-main>
  </div>
</template>


<script>
import axios from 'axios';
import { mapState, mapMutations, mapActions } from 'vuex'
  export default {
    components:{
      
    },
    data() {
      return {
        loading: false,

        tmpPlayingSong: {
          title: '',
          author: '',
          url: '',
          pic: '',
          lrc: '',
        },
        playingSong: {},
        // uncollected:require('../assets/uncollected.png'), //未收藏
        // collected:require('../assets/collected.png'),
        collectList:[],
        isDelete:require('../assets/delete.jpg'), 
   
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
      uncollect(index, row) {
        var songId = row.Id
        console.log(songId)
        axios
        .post(`http://localhost:9091/cancelCollection?user=${this.currentName}&songId=${songId}`)
        .then(response => {
            console.log("取消收藏",response)
        });
        this.$message({
          message: '取消收藏',
        });
        location.reload();
      }

    },
    mounted() {
      //查询收藏的歌曲
      axios
      .post(`http://localhost:9091/queryCollection?user=${localStorage.getItem('username')}`)
      .then(response => {
          this.collectList = response.data
          console.log(this.collectList)
         
      
      });

    },

    computed: {
      ...mapState({
        currentName: state => state.user.currentUser,
      }),
    }
    
  };
</script>
<style scoped>

.el-main {  
  height:1400px;
}
</style>