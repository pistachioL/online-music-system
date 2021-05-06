<template>
  <div id="app">
    <el-container>
      <el-header style="background-color: white; height: 63px">
          <Topbar v-show="$route.meta.navShow" />
      </el-header>

      <!-- 播放器 -->
      <!-- <el-footer> -->
          <div class="hover">
              <aplayer :autoplay="true" :music="this.$store.state.player.songList" v-show="$route.meta.navShow"> </aplayer>
          </div>
      <!-- </el-footer> -->
      
      <router-view></router-view> 
    </el-container>
  </div>
</template>

<script>

import Topbar from '@/components/NavMenu/topbar.vue'
import Aplayer from 'vue-aplayer'
import { mapActions,mapState } from 'vuex'  
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
  computed: {
    ...mapState({
      songList: state => state.player.songList,
    }),
  
  },
  mounted(){

  }
}
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
