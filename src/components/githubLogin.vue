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
      githubUser: "github登陆中..."
    };
  },
  mounted() {
    let code = this.$route.query.code;
    axios
    .get(`http://localhost:9090/oauth/redirect?code=${code}`)


  }
};
</script>

<style lang="scss" scoped>
</style>