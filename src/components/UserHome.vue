<template>
  <div>

    <NavMenu />

    <el-card class="box-card">
        <div>
        <el-avatar shape="circle" :size="150" src="http://p1.music.126.net/FVI9STacjhXQgOfkPDtPng==/109951163259293373.jpg?param=180y180"></el-avatar>
        <el-button plain>编辑资料</el-button>
        </div>
        <el-divider></el-divider>
        {{$store.getters.userName}}<br>
        个人简介：相信音乐的力量！！
    </el-card>

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
 import NavMenu from './NavMenu.vue'
  export default {
    components:{
      NavMenu,
    },
    data() {
      return {
        imageUrl: ''
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
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
      }
    }
  }
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
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

  
</style>