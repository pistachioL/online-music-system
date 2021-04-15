<template>
  <div>
    <!-- 导航栏 -->
    <el-menu :default-active="this.$route.path" router mode="horizontal">
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
         {{item.navItem}}
      </el-menu-item>

    <!-- 搜索栏 -->
    <div class="search">
      <Search />
    </div>
    
    <!-- 根据是否登录展示 -->
    <div class="login">
    <div v-if="$store.getters.userName"> 
        <el-dropdown> 
          <span class="el-dropdown-link">
            <a href="http://localhost:8080/user" >{{$store.getters.userName}}</a>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-remove">  <button v-on:click="logoutCheck">退出登录</button></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
    </div>
      <!-- 未登录 -->
    <div v-else > <a href="http://localhost:8080/login"> 登录/注册 </a>  </div> 
    </div>
 
  </el-menu>  


</div>
</template>

<script>

import { mapActions } from 'vuex'  
import Search from './Search';

  export default {
    components:{
      Search,
    },
    data() {
      return {
          navList:[
            {name:"/", navItem:'首页'},
            {name:"/popularList", navItem:'音乐榜单'},
            {name:"/myMusic", navItem:'我的音乐盒'},
            {name:"/user", navItem:'个人中心'},
          ],
          form: {
            username: '',
            password: '',
          }
          
      };
    },
    methods: {
    
      //退出登录
      ...mapActions(['logoutAction']),
      logoutCheck() {
        console.log(1111);
        this.logoutAction();
        this.$router.push('/login');
      }
    },
    mounted() {
       
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
 
    .login {
        float: right;
        margin: 20px -630px; /*上右下左*/
    }
    .search {
       float: right;
       margin: 10px 200px; /*上右下左*/
    }
    a {
      text-decoration: none; 
    }


</style>