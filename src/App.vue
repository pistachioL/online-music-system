<template>
  <div id="app">
    <el-container >
      <el-header style="background-color: white; height: 73px">
          <Topbar v-show="$route.meta.navShow" />
      </el-header>

      <!-- 播放器 -->
      <el-footer>
          <div class="hover">
              <aplayer v-show="$route.meta.navShow" autoplay :music="{
        title: 'Preparation',
        author: 'Hans Zimmer/Richard Harvey',
        url: 'https://webfs.yun.kugou.com/202104111909/6c8aeac79c5bd5b887d4ec545e9e6bff/KGTX/CLTX001/06dd65f5e1b3a0e5829175e1ed3ef916.mp3',
        pic: 'http://imge.kugou.com/stdmusic/20200915/20200915155403608950.jpg',
        lrc: '[00:00.00]lrc here\n[00:01.00]aplayer',
        theme: '#b7daff'
      }">
    </aplayer>
            
          </div>
      </el-footer>
      

      <router-view></router-view> 
    </el-container>
  </div>
</template>

<script>

import Topbar from '@/components/NavMenu/topbar.vue'
import Aplayer from 'vue-aplayer'

export default {
  name: 'App',
  data() {
    return {
 
    }
    
  },

  components:{
    Topbar,
    Aplayer
  },
  methods:{
    
  }
}
</script>



<style>

</style>
