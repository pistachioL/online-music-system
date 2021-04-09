<template>
<div>  
  <el-container>
    
    <NavMenu />
    <el-main>
  
    <Carousel />
 
   <!-- 推荐 -->
    <h2>天籁推荐 </h2>
    <el-row :gutter="12">
      <el-col :span="5">
        <el-card shadow="hover">
             <el-image style="width: 200px; height: 200px" :src="this.personalized[0].picUrl" :fit="fit"> </el-image>
             {{this.personalized[0].name}}
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card shadow="hover">
           <el-image style="width: 200px; height: 200px" :src="this.personalized[1].picUrl" :fit="fit"> </el-image>
           {{this.personalized[1].name}}
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.personalized[2].picUrl" :fit="fit"> </el-image>
            {{this.personalized[1].name}}
        </el-card>
      </el-col>
    </el-row>

    <!-- 榜单 -->
    <h2>热门榜单 </h2>
    <el-row :gutter="12">
      <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src=" this.topList[0].coverImgUrl" :fit="fit"> </el-image>
        </el-card>
      </el-col>

      <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src=" this.topList[1].coverImgUrl" :fit="fit"> </el-image>
        </el-card>
      </el-col>

       <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src=" this.topList[6].coverImgUrl" :fit="fit"> </el-image>
        </el-card>
      </el-col>
    </el-row>



       <!-- 热门歌手 -->
    <h2> 热门歌手 </h2>
    <el-row :gutter="12">
     <el-col :span="5">
        <el-card shadow="hover">
             <el-image style="width: 200px; height: 200px" :src="this.topSinger[0].img1v1Url" :fit="fit"> </el-image>
               {{this.topSinger[0].name}}
        </el-card>
      </el-col>

      <el-col :span="5">
        <el-card shadow="hover">
           <el-image style="width: 200px; height: 200px" :src="this.topSinger[1].img1v1Url" :fit="fit"> </el-image>
          {{this.topSinger[1].name}}
        </el-card>
      </el-col>

      <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.topSinger[2].img1v1Url" :fit="fit"> </el-image>
            {{this.topSinger[2].name}}
        </el-card>
      </el-col>
    </el-row>


    </el-main>

    <el-footer height="-100px">
      <aplayer autoplay :music="{
        title: 'Preparation',
        author: 'Hans Zimmer/Richard Harvey',
        url: 'https://webfs.yun.kugou.com/202102201935/bbe088faa126f7b6124f1323e2b23fe3/KGTX/CLTX001/217a80c30c4f3de6f68567a1173453e5.mp3',
        pic: 'http://devtest.qiniudn.com/Preparation.jpg',
        lrc: '[00:00.00]lrc here\n[00:01.00]aplayer',
        theme: '#b7daff'
      }">
    </aplayer>
   </el-footer>
  
  </el-container> 
</div>
  
</template>

<script>
import NavMenu from './NavMenu.vue'
import Carousel from './Carousel.vue'
import Aplayer from 'vue-aplayer'
import axios from 'axios'

export default {
  name: 'HelloWorld',
  components: {
    NavMenu,
    Carousel,
    Aplayer,
  },
  data() {
     return {
        personalized: this.personalized,
        topList: this.topList,
        topSinger: this.topSinger,
      }
  },

  mounted() {
    //网易云推荐新音乐
    axios
    .get(`https://autumnfish.cn/personalized`)
    .then(response => {
        this.personalized = response.data.result
       
    });

    //网易云热门歌单
    axios
    .get(`https://autumnfish.cn/top/playlist?limit=10&order=new`)
    .then(response => {
        this.topList = response.data.playlists
       
    });

    //网易云热门歌手
  axios
    .get(`https://autumnfish.cn/toplist/artist`)
    .then(response => {
        console.log(response.data)
        this.topSinger = response.data.list.artists
       
    });

    


  },
     
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
el-footer { 
  width: 100%;
  position: absolute;
  bottom: 0
}


</style>