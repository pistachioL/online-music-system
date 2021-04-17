<template>
  <div>
  <el-tabs :tab-position="tabPosition" style="height: 1700px; margin-top:-50px" >
    
    <el-tab-pane label="酷狗音乐">
        <el-image style="width: 200px; height: 200px" v-loading="loading" :src="this.img"> </el-image>
               <h1> 酷狗飙升榜 </h1>
        <el-button type="primary" icon="el-icon-video-play" round>全部播放</el-button>
        <el-button type="primary" icon="el-icon-star-on" round>收藏</el-button>
        <el-button type="primary" icon="el-icon-connection" round>分享</el-button>

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
    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>

 
  </el-tabs>
  </div>
</template>
<script>
import axios from 'axios';
  export default {
    data() {
      return {
        tabPosition: 'left',
        popularList: this.popularList,
        loading: false,
        img: '',

      };
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
      // },
 

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