<template>
    <div>
      <h1>海纳音乐</h1>
      <!-- 登录 -->
      <div class="login">

  <el-tabs type="border-card">
  <el-tab-pane label="登录">
    <el-card class="box-card">
    <form ref="loginForm" :model="loginForm">
      <el-input placeholder="请输入用户名"  v-model="loginForm.username" prefix-icon="el-icon-user" ></el-input><br><br>
      <el-input placeholder="请输入密码" v-model="loginForm.password" prefix-icon="el-icon-lock" show-password="true"></el-input><br><br>
      <el-checkbox v-model="loginForm.remember">记住我</el-checkbox>  <br><br> 
      <el-button style="width:100%;margin-bottom:15px;" @click="loginCheck" >登录</el-button>   
    </form> <br> 

       <!-- 第三方登录 -->
        <p> 第三方登录 </p>
        <a v-on:click="loginWithGithub"><img src="../../assets/github.png" width="30px"  alt="">  </a>
    </el-card>
  </el-tab-pane>
  
  <el-tab-pane label="注册" >
    <el-card class="box-card">
      <form action="">
      <el-input placeholder="请输入用户名" v-model="registerForm.username" prefix-icon="el-icon-user-solid" ></el-input><br><br>
      <el-input placeholder="请输入邮箱" v-model="registerForm.email" prefix-icon="el-icon-mobile-phone" ></el-input><br><br>
      <el-input placeholder="请输入密码" v-model="registerForm.password" prefix-icon="el-icon-lock" show-password="true"></el-input><br><br>
      <!-- <el-input placeholder="确认密码" v-model="registerForm.password" prefix-icon="el-icon-lock" show-password="true"></el-input><br><br> -->
      <el-button style="width:100%;margin-bottom:15px;" native-type="submit" @click="register">注册</el-button>   
    </form> <br> 
    </el-card>
  </el-tab-pane>
  </el-tabs>

      </div>
    </div>

</template> 

<script>

import axios from 'axios'
  let oauth_url = 'https://github.com/login/oauth/authorize'
  let client_id = 'cecc9bc83bd8cff1bfb0' 
  let redirect_uri = 'http://localhost:8080/oauth/redirect'

  export default {
    data() {
      return {
        input: '',
        showLogin: false,
        //注册框
        registerForm: {
            username: '',
            password: '',
            email: '',
        },
        //登录框
       loginForm: {
            email: '',
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
    created() {
      this.$parent.showNav = false;
    },
    mounted() {
      this.showLogin = true;
    },
    computed: {
      
    },
    methods: {
      //注册
      register() {
        axios
        .post(`http://localhost:9091/register?username=${this.registerForm.username}&password=${this.registerForm.password}&email=${this.registerForm.email}`)
        .then(response => {
            if(response.data.code == 0) {
              this.$message({
                showClose: true,
                message: '注册成功！',
                type: 'success'
              });
              this.$router.push('/login');
            } 
            if(response.data.code == 1) {
               this.$message({
                showClose: true,
                message: '错了哦，该邮箱已被注册！',
                type: 'error'
              });
            }
             if(response.data.code == -1) {
               this.$message({
                showClose: true,
                message: '用户名密码不为空！',
                type: 'error'
              });
            }

        })
      },

      //账户密码登录
      loginCheck() {
        axios
        .post(`http://localhost:9091/login?username=${this.loginForm.username}&password=${this.loginForm.password}`)
        .then(response => {
          this.$store.dispatch('user/loginAction')  //修改action
            if(response.data.code == 0 && this.$store.state.user.isLogin == 1) {
               this.$store.commit('user/changeLogin', this.loginForm.username);
                this.$message({
                  showClose: true,
                  message: '登录成功！',
                  type: 'success'
                });
              
             
              this.$router.push('/');
            }
            if(response.data.code == 1) {
              this.$message({
                showClose: true,
                message: '密码错误哦！',
                type: 'error'
             });
            }
            if(response.data.code == -1) {
              this.$message({
                showClose: true,
                message: '用户不存在哦！',
                type: 'error'
              });
            }
        });
      },


      //github登录
      loginWithGithub() {
        window.location.href = `${oauth_url}?client_id=${client_id}&redirect_uri=${redirect_uri}`
      }, 
    },

  }


//  router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (this.$store.state.isLogin) {
//       next();
//       return;
//     } else {
//       next('/')
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
    height: 60vh;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
  }
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 380px;
    margin: 20px 30px;
  }
  p{
    font-size:2px;
  }
  h1{
    text-align:center;
    font-size:2.5em;
    margin-top:-100px;
  }
 
  img:hover{
    cursor: pointer; 
  }

</style>