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
    <div v-if="userName"> 
      <el-avatar src="https://avatars.githubusercontent.com/u/35989937?v=4"></el-avatar>
      <el-dropdown> 
        <span class="el-dropdown-link">
          <a href="http://localhost:8080/user" >{{userName}}</a>
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

import { mapActions,mapGetters,mapState } from 'vuex'  

import Search from '../Search.vue';

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
          },
  
          
      };
    },
    computed: {
      ...mapState({
        userName: state => state.user.currentUser,
      })
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

  .el-menu {
      min-width: 800px;
      padding-left: 20px;
  }

  .el-menu > .el-menu-item {
      min-width: 5%;
      padding: 0 5px;
      box-sizing: content-box;
      text-align: center;  
  }

  .login {
    float: right;
    margin: -65px 0px; /*上右下左*/
  }
  .search {
    /* width: 300px; */
    margin: 0px 800px; /*上右下左*/
  }

  a {
      text-decoration: none; 
  }


</style>
