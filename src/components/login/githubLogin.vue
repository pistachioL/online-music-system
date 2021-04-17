<template>
  <div>
    <div>{{githubUser}}</div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions,mapState } from 'vuex'  
//let Base64 = require('js-base64').Base64

export default {
  data() {
    return {
      githubUser: "github登陆中,请稍候...",
      name: this.name,
     // responseData: '',
    };
  },
  created() {
    this.$emit('header', false)
  },
  mounted() {
    let code = this.$route.query.code;
    axios
    .get(`http://localhost:9091/oauth/redirect?code=${code}`)
    .then(response => {
           if (response.data) {
            this.name = response.data.name;
            // this.avatar = response.data.avatar_url;
            this.loginAction();
            if(this.$store.state.isLogin === 1) { 
                this.$store.commit('changeLogin', this.name);
                this.$router.push('/')  //登录成功，返回主页
            }
            else {
              console.log('请登录')
            }
        }
       
    })
    .catch(function(err) {
        console.log(err)
    });

  },
  methods: {
      ...mapState(['isLogin']),
      ...mapActions(['loginAction']),
  }
}
</script>

<style lang="scss" scoped>
</style>