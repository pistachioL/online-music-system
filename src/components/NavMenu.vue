<template>

  <div>
    <!-- 导航栏 -->
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">天籁之音</el-menu-item>
      <el-menu-item index="2">好歌推荐</el-menu-item>
      <el-menu-item index="3" >音乐榜单</el-menu-item>
      <el-menu-item index="4">个人中心</el-menu-item>

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
  padding-left: 700px;
  padding-top: 15px;
}

</style>