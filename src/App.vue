<template>
  <div id="app">
    <el-container >
      <el-header style="background-color: white; height: 73px">
          <Topbar/>
      </el-header>

      <!-- 播放器 -->
      <el-footer>
          <div class="hover">
          <aplayer :autoplay="true" :music=playingSong> </aplayer>
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
  components:{
    Topbar,
    Aplayer
  },
}
</script>



<style>

</style>
