// 主页
<template>
<div>  
  <el-container>
 
    <NavMenu />    

  
    <el-main>
    <Carousel />
    <!-- 榜单 -->
    <h2>榜单 </h2>
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

    <el-footer height="90px">
      <aplayer autoplay :music="{
        title: 'Preparation',
        author: 'Hans Zimmer/Richard Harvey',
        url: 'https://www.kugou.com/song/#hash=217A80C30C4F3DE6F68567A1173453E5&album_id=40725263',
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
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-footer{
  width: 100%;
  position: absolute;
  bottom: 0
}


</style>