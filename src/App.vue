<template>
  <div id="app">
    <el-container >
      <el-header style="background-color: white; height: 73px">
          <Topbar v-if="nav_show"/>
      </el-header>

      <!-- 播放器 -->
      <el-footer>
          <div class="hover">
          <aplayer :autoplay="true" :music=playingSong> </aplayer>
          </div>
      </el-footer>
      
      <router-view v-on:header="header"></router-view> 
    </el-container>
  </div>
</template>

<script>

import Topbar from '@/components/NavMenu/topbar.vue'
import Aplayer from 'vue-aplayer'
import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      nav_show: true,
    }
  },
  components:{
    Topbar,
    Aplayer
  },
  methods:{
    header(bool){
      this.nav_show = bool;
    }
  }
}
</script>



<style>

</style>
