<template>
  <div>
    <div>{{githubUser}}</div>
   <div>名字： {{name}} </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      githubUser: "github登陆中...",
      name: this.name,
    };
  },
  mounted() {
    let code = this.$route.query.code;
    axios
    .get(`http://localhost:9090/oauth/redirect?code=${code}`)
    .then(response => {
        //  if (response.data) {
             this.name = response.data.name;
             sessionStorage.setItem("userName", response.data.name)
            //用户名放入vuex
            this.$store.dispatch("setUser",response.data.name)
            console.log(1111)
            console.log(this.$store.state.isLogin)

        //    this.$router.push('/HelloWorld')  //登录成功，返回主页
      //  }
       
    })
    .catch(function(err) {
        console.log(err)
    });

  }
}
</script>

<style lang="scss" scoped>
</style>