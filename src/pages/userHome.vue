<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="4" :offset="4"> 
        <el-avatar shape="square" :size="150" src="http://p1.music.126.net/FVI9STacjhXQgOfkPDtPng==/109951163259293373.jpg?param=180y180"></el-avatar>
      </el-col>

      <el-col :span="5" :offset="0"> 
        <h2>  {{currentName}} </h2>
        <p style="color:grey"> {{this.desc}} </p>
        <p style="color:grey"> {{this.gender}} </p>
          <el-button plain @click="goto"  type="primary" round> 编辑资料</el-button>
      </el-col>

    </el-row>
   

   <el-divider></el-divider>  
    <el-card class="box-card">
        我创建的歌单
    </el-card>

    <el-divider></el-divider>

    <el-card class="box-card">
        我收藏的歌曲
    </el-card>

  </div>
</template>


<script>
import axios from 'axios'
import {mapGetters,mapState } from 'vuex' 
  export default {
    components:{

    },
    data() {
      return {
        imageUrl: '',
        desc: '',
        gender: '',
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      goto() {
        this.$router.push('/user/edit');
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },

    },
    mounted() {
       axios
        .post(`http://localhost:9091/readProfile?user=${this.currentName}`)
        .then(response => {
            if(response.data.code == 0) {
              this.gender = response.data.msg.gender
              this.desc = response.data.msg.desc
            }
        });
    },

      computed: {
      ...mapState({
        currentName: state => state.user.currentUser,
      })
       
    
    },

  }
</script>

<style>
  .el-aside {
    color: #333;
  }

  .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 50%;
    margin-left: 200px;
  }

  .el-row {
    margin-bottom: 20px;
  }

  
</style>