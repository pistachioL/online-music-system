<template>

  <div>
    <!-- 导航栏 -->
    <el-menu :default-active="this.$route.path" router mode="horizontal" @select="handleSelect">
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
         {{item.navItem}}
      </el-menu-item>

    <div class="nav">
    <!-- 搜索框 -->
        <el-input style="width: 250px" v-model="input" placeholder="搜索你想要听的歌曲" prefix-icon='el-icon-search'></el-input>
    </div>
  </el-menu>  


</div>
</template>

<script>

  export default {
    components:{

    },
    data() {
      return {
          navList:[
            {name:"/HelloWorld", navItem:'首页'},
            {name:"/githubLogin", navItem:'音乐推荐'},
            {name:"/popularList", navItem:'音乐榜单'},
  
          ],
          input: '',
          dialogFormVisible: false,
          form: {
            username: '',
            password: '',
          }
          
      };
    },

    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    }
    
  }
</script>

<style scoped>
.nav {
  padding-left: 1000px;
  padding-top: 15px;
}

</style>