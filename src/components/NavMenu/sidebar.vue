<template>
  <div>
    <el-container>
      <el-header>
      <!-- <NavMenu/> -->
      </el-header>

      <el-aside >
        <el-row class="tac">
          <el-col :span="15">
            <el-menu
              default-active="this.$route.path"
              class="el-menu-vertical-demo"
              router>
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>酷狗音乐</span>
                </template>
              
                <el-menu-item-group>
                  <el-menu-item index="/NeteaseCloud" @click="goto('/NeteaseCloud')" > 飙升榜</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>

                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>

                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>



              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">网易云飙升榜</span>
              </el-menu-item>


              <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">QQ音乐飙升榜</span>
              </el-menu-item>

              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
            </el-menu>
            
          </el-col>
        </el-row>
      </el-aside>


      <el-main>
<router-view></router-view>

      </el-main>

    </el-container>
  </div>
</template>

<script>

  export default {
    data() {
      return {
      
      }
    },
    components:{
   

    },
    methods:{
      goTo(path) {
        this.$router.replace(path);
      }
    }
  }
</script>

<style scoped>
  .el-header {
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 60px;
  
  }
  .el-aside {
    margin-top:2px;
  }
</style>