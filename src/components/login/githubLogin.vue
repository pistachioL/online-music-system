<template>
  <div>
    <div>{{githubUser}}</div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions,mapState } from 'vuex'  
export default {
  data() {
    return {
      githubUser: "github登陆中,请稍候...",
      name: this.name,
    };
  },
  mounted() {
    let code = this.$route.query.code;
    axios
    .get(`http://localhost:9090/oauth/redirect?code=${code}`)
    .then(response => {
           if (response.data) {
            this.name = response.data.name;
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