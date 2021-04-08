<template>
<div>  
  <el-container>
    
    <NavMenu />
    <el-main>
  
    <Carousel />
 
   <!-- 推荐 -->
    <h2>天籁推荐 </h2>
    <el-row :gutter="12">
      <el-col :span="3">
        <el-card shadow="hover">
          徐小凤
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card shadow="hover">
          梅艳芳
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card shadow="hover">
          邓紫棋
        </el-card>
      </el-col>
    </el-row>

    <!-- 榜单 -->
    <h2>榜单 </h2>
    <el-row :gutter="12">
      <el-col :span="3">
        <el-card shadow="hover">
          
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card shadow="hover">
          梅艳芳
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card shadow="hover">
          邓紫棋
        </el-card>
      </el-col>
    </el-row>



       <!-- 热门歌手 -->
    <h2> 热门歌手 </h2>
    <el-row :gutter="12">
      <el-col :span="3">
        <el-card shadow="hover">
          徐小凤
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card shadow="hover">
          梅艳芳
        </el-card>
      </el-col>
      <el-col :span="3">
        <el-card shadow="hover">
          邓紫棋
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



export default {
  name: 'HelloWorld',
  components: {
    NavMenu,
    Carousel,
    Aplayer,
  },
  data() {
     return {
       

      }
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