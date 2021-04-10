<template>
  <div>
    <!-- 导航栏 -->
    <el-menu :default-active="this.$route.path" router mode="horizontal" @select="handleSelect">
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
         {{item.navItem}}
      </el-menu-item>

        <!-- 搜索框 -->
      <el-menu-item id="el-menu-item-searchinput-container" :disabled="false">
          <el-input style="width: 250px" v-model="input" placeholder="搜索你想要听的歌曲" prefix-icon='el-icon-search'></el-input>
      </el-menu-item>
    
        <!-- 根据是否登录展示 -->
      <div class="login" >
      <div v-if="$store.getters.userName"> 
          <el-dropdown>
            <span class="el-dropdown-link">
              <a href="http://localhost:8080/user" >{{$store.getters.userName}}</a>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-plus">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
      </div>
        <!-- 未登录 -->
      <div v-else > <a href="http://localhost:8080/"> 登录/注册 </a>  </div> 
      </div>
 
  </el-menu>  


</div>
</template>

<script>
import axios from 'axios';
  export default {
    components:{

    },
    data() {
      return {
          navList:[
            {name:"/HelloWorld", navItem:'首页'},
            {name:"/popularList", navItem:'音乐榜单'},
            {name:"/myMusic", navItem:'我的音乐盒'},
            {name:"/user", navItem:'个人中心'},
          ],
          input: '',
          dialogFormVisible: false,
          form: {
            username: '',
            password: '',
          }
          
      };
    },
    mounted() {
      //搜索
      axios
      .get(`https://autumnfish.cn/search?keywords=`)
      .then(response => {
          this.personalized = response.data.result
        
      })
    },

    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    }
    
  }
</script>

<style scoped>
/* .nav {
  padding-left: 1000px;
  padding-top: 15px;
} */
 .el-menu {
        min-width: 800px;
        padding-left: 20px;
    }
    #el-menu-item-placeholder1 {
        width: 60%;
        max-width: 60%;
        cursor: default;
    }
    .el-menu > .el-menu-item {
        min-width: 5%;
        padding: 0 5px;
        box-sizing: content-box;
        text-align: center;
    }

    #el-menu-item-searchinput-container {
        cursor: default;
        opacity: 1;
        margin: 0 -80px;
        left:50%;
    }
    .login {
        float: right;
        margin: 20px 10px; /*上右下左*/
    }

</style>