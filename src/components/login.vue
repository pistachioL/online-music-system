<template>
    <div>
      <h1>海纳音乐</h1>
      <!-- 登录 -->
      <div class="login">
  <!-- <el-tab-pane>
    <span slot="label"> 登录</span>
          <form action="">
            <el-input placeholder="请输入用户名" v-model="input" prefix-icon="el-icon-user-solid" ></el-input><br><br>
            <el-input placeholder="请输入密码" v-model="input" prefix-icon="el-icon-lock" show-password="true"></el-input><br><br>
            <el-checkbox v-model="checked">记住我</el-checkbox>   <br><br> 
           <el-button style="width:100%;margin-bottom:15px;" native-type="submit" >登录</el-button>   
          </form> <br> -->

       <!-- 第三方登录 -->
        <!-- <p> 第三方登录 </p>
        <a v-on:click="loginWithGithub"><img src="../assets/github.png" width="30px"  alt="">  </a>
  </el-tab-pane> -->


 <!-- <el-tab-pane label="注册">
          <form action="">
            <el-input placeholder="请输入用户名" v-model="input" prefix-icon="el-icon-user-solid" ></el-input><br><br>
            <el-input placeholder="请输入密码" v-model="input" prefix-icon="el-icon-lock" show-password="true"></el-input><br><br>
            <el-checkbox v-model="checked">记住我</el-checkbox>   <br><br> 
           <el-button style="width:100%;margin-bottom:15px;" native-type="submit" >登录</el-button>   
          </form> <br>
  </el-tab-pane> -->



  <el-tabs type="border-card">
  <el-tab-pane label="登录">
    <el-card class="box-card">
    <form action="">
      <el-input placeholder="请输入用户名" v-model="input" prefix-icon="el-icon-user-solid" ></el-input><br><br>
      <el-input placeholder="请输入密码" v-model="input" prefix-icon="el-icon-lock" show-password="true"></el-input><br><br>
      <el-checkbox v-model="checked">记住我</el-checkbox>  <br><br> 
      <el-button style="width:100%;margin-bottom:15px;" native-type="submit" >登录</el-button>   
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

  let oauth_url = 'https://github.com/login/oauth/authorize'
  let client_id = 'cecc9bc83bd8cff1bfb0' 
  let redirect_uri = 'http://localhost:8080/oauth/redirect'

  export default {
    data() {
      return {
        input: '',
        seen:false,
        current:0
      }
    },
    methods: {
      loginWithGithub() {
        window.location.href = `${oauth_url}?client_id=${client_id}&redirect_uri=${redirect_uri}`
      },
     
      
    },
    
    
  }
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