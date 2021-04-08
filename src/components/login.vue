<template>
    <div>
      <h1>海纳音乐</h1>
      <!-- 登录 -->
      <div class="login">

  <el-tabs type="border-card">
  <el-tab-pane label="登录">
    <el-card class="box-card">
    <form ref="loginForm" :model="loginForm">
      <el-input placeholder="请输入用户名"  v-model="loginForm.username" prefix-icon="el-icon-user-solid" ></el-input><br><br>
      <el-input placeholder="请输入密码" v-model="loginForm.password" prefix-icon="el-icon-lock" show-password="true"></el-input><br><br>
      <el-checkbox v-model="loginForm.remember">记住我</el-checkbox>  <br><br> 
      <el-button style="width:100%;margin-bottom:15px;" native-type="submit" @click="loginCheck" >登录</el-button>   
    </form> <br> 

       <!-- 第三方登录 -->
        <p> 第三方登录 </p>
        <a v-on:click="loginWithGithub"><img src="../assets/github.png" width="30px"  alt="">  </a>
    </el-card>
  </el-tab-pane>
  
  <el-tab-pane label="注册" >
    <el-card class="box-card">
      <form action="">
      <el-input placeholder="请输入用户名" v-model="input" prefix-icon="el-icon-user-solid" ></el-input><br><br>
      <el-input placeholder="请输入手机号码" v-model="input" prefix-icon="el-icon-mobile-phone" ></el-input><br><br>
      <el-input placeholder="请输入密码" v-model="input" prefix-icon="el-icon-lock" show-password="true"></el-input><br><br>
      <el-input placeholder="确认密码" v-model="input" prefix-icon="el-icon-lock" show-password="true"></el-input><br><br>
      <el-button style="width:100%;margin-bottom:15px;" native-type="submit">注册</el-button>   
    </form> <br> 
    </el-card>
  </el-tab-pane>
  </el-tabs>


  
      </div>
    </div>

</template> 

<script>
import { mapActions,mapState } from 'vuex'  
  let oauth_url = 'https://github.com/login/oauth/authorize'
  let client_id = 'cecc9bc83bd8cff1bfb0' 
  let redirect_uri = 'http://localhost:8080/oauth/redirect'

  export default {
    data() {
      return {
        input: '',
        showLogin: false,
        //登录框
       loginForm: {
            username: '',
            password: '',
            remember: '',
        },
        rules: {
            username: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
            ],
            password: [
                { required: true, message: '请输入密码', trigger: 'blur' }
            ],
        },

      }
    },
    mounted() {
        this.showLogin = true;
    },
    computed: {
        ...mapState(['isLogin'])
    },
    methods: {
      ...mapActions(['loginAction']),
      //判断是否有勾选“记住我”
      
      //账户密码登录
      loginCheck() {
          if(this.loginForm.username == 'liao' && this.loginForm.password == '123456'){
              this.loginAction();
              this.$router.push('/HelloWorld');
          }else{
            this.$message({
                type: 'error',
                message: '账户密码错误'
            });
        }
      },

      //github登录
      loginWithGithub() {
        window.location.href = `${oauth_url}?client_id=${client_id}&redirect_uri=${redirect_uri}`
      }, 
    },

  }


//  this.$router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (this.$store.state) {
//       next({
//         path: '/',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       next()
//     }
//   } else {
//     next() // 确保一定要调用 next()
//   }
// })

</script>


<style scoped>
  .login{
    position: relative;
    width: 100%;
    height: 70vh;
    display:flex;
    justify-content: center;
    align-items: center;
  }
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 380px;
  
  }
  p{
    font-size:2px;
  }
  h1{
    text-align:center;
    font-size:2.5em;
  }
 
  img:hover{
    cursor: pointer; 
  }

</style>