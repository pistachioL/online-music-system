<template>
  <div>
    {{githubUser}}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      githubUser: "github登陆中,请稍候...",
      name: this.name,

    };
  },
  created() {
      this.$parent.showNav = false; //是否显示导航栏
  },
  mounted() {
    let code = this.$route.query.code;
    axios
    .get(`http://localhost:9091/oauth/redirect?code=${code}`)
    .then(response => {
           if (response.data) {
            this.name = response.data.name;
            // this.avatar = response.data.avatar_url;
            this.$store.dispatch('user/loginAction')  //修改action
           
            if(this.$store.state.user.isLogin === 1) { 
                this.$store.commit('user/changeLogin', this.name);
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
     
      // ...mapState(['isLogin']),

      // ...mapActions(['loginAction']),
  }
}
</script>

<style lang="scss" scoped>
</style>