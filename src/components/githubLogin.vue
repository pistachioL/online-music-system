<template>
  <div>
    <div>{{githubUser}}</div>

    
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      githubUser: "github登陆中...",

    };
  },
  mounted() {
    let code = this.$route.query.code;
    axios
    .get(`http://localhost:9090/oauth/redirect?code=${code}`)
    .then(response => {
        if (response.data) {
            this.githubUser = response.data.name;
            this.$router.push('/HelloWorld')  //登录成功，返回主页
        }
       
    })
    .catch(function(err) {
        console.log(err)
    });

  }
}
</script>

<style lang="scss" scoped>
</style>