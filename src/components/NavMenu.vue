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

    <!-- 登录 -->
        <el-button type="text" @click="dialogFormVisible = true"> 登录 </el-button>
      <el-dialog title="登录" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="用户名" :label-width="formLabelWidth">
              <el-input v-model="form.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" :label-width="formLabelWidth">
              <el-input v-model="form.password" placeholder="请输入密码"> </el-input>
            </el-form-item>
             <el-form-item label="验证码" :label-width="formLabelWidth">
              <el-input v-model="form.password" placeholder="请输入验证码"> </el-input>
            </el-form-item>
          </el-form>      
          <div slot="footer" class="dialog-footer">
            
            <el-button @click="dialogFormVisible = false" size="medium">取 消</el-button>
     <el-button type="primary" size="medium" @click="dialogFormVisible = false">登 录</el-button>
    
          </div>

          <!-- 第三方登录 -->
    
          <el-button> <a href="https://github.com/login/oauth/authorize?
      client_id=cecc9bc83bd8cff1bfb0&redirect_uri=http://localhost:8080/oauth/redirect"> github第三方登录 </a> </el-button>
      </el-dialog>
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