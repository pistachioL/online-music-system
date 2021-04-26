<template>
  <div>
      <el-container>
        
        <el-main>
  {{this.$store.state.user.isLogin}}
        <Carousel />
         <!-- 推荐 -->
    <h2>天籁推荐 </h2>
    <el-row :gutter="12">
      <el-col :span="5">
        <el-card shadow="hover">
             <el-image style="width: 200px; height: 200px" :src="this.personalized[0].picUrl"> </el-image>
             {{this.personalized[0].name}}
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card shadow="hover">
           <el-image style="width: 200px; height: 200px" :src="this.personalized[1].picUrl"> </el-image>
           {{this.personalized[1].name}}
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.personalized[2].picUrl" > </el-image>
            {{this.personalized[2].name}}
        </el-card>
      </el-col>
   
       <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.personalized[3].picUrl"> </el-image>
            {{this.personalized[3].name}}
        </el-card>
      </el-col>
    </el-row>

    <!-- 榜单 -->
    <h2>热门榜单 </h2>
    <el-row :gutter="12">
      <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src=" this.topList[0].coverImgUrl"> </el-image>
        </el-card>
      </el-col>

      <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src=" this.topList[1].coverImgUrl" > </el-image>
        </el-card>
      </el-col>

    <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src=" this.topList[4].coverImgUrl" > </el-image>
        </el-card>
      </el-col>

       <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src=" this.topList[6].coverImgUrl"> </el-image>
        </el-card>
      </el-col>
    </el-row>



       <!-- 热门歌手 -->
    <h2> 热门歌手 </h2>
    <el-row :gutter="12">
     <el-col :span="5">
        <el-card shadow="hover">
             <el-image style="width: 200px; height: 200px" :src="this.topSinger[0].img1v1Url"> </el-image>
               {{this.topSinger[0].name}}
        </el-card>
      </el-col>

      <el-col :span="5">
        <el-card shadow="hover">
           <el-image style="width: 200px; height: 200px" :src="this.topSinger[1].img1v1Url"> </el-image>
          {{this.topSinger[1].name}}
        </el-card>
      </el-col>

      <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.topSinger[2].img1v1Url"> </el-image>
            {{this.topSinger[2].name}}
        </el-card>
      </el-col>

        <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.topSinger[3].img1v1Url"> </el-image>
            {{this.topSinger[3].name}}
        </el-card>
      </el-col>

    
    </el-row>



    </el-main>

      </el-container>
  </div>
</template>



<script>

import Carousel from '../components/Carousel.vue'
import Aplayer from 'vue-aplayer'
import axios from 'axios'
  export default {
    components:{
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
    // created() {
    //   this.$emit('header', true)
    // },
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
        this.topSinger = response.data.list.artists
       
    });
  },
     
  };
</script>

<style>

  
</style>