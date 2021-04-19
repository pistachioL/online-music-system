<template>
  <div id="app">
    <el-container >
      <el-header style="background-color: white; height: 73px">
          <Topbar v-show="$route.meta.navShow" />
      </el-header>

      <!-- 播放器 -->
      <el-footer>
          <div class="hover">
              <aplayer :autoplay="true" :music=songList> </aplayer>
          </div>
      </el-footer>
      
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
    })
  },
  methods:{
     
  }
}
</script>



<style>

</style>
