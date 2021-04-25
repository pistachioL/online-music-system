<template>
  <div >
    <el-row>
      <!-- <p style="font-size:15px"> 头像 </p> -->
      <el-col :span="4" :offset="2">
        <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-col>

      <el-col :span="5" offset="2">      
        <p style="font-size:10px; color:grey" > 格式：支持PNG/JPG格式的图片 </p>
        <p style="font-size:10px; color:grey"> 尺寸：建议尺寸200*200px </p>
        <p style="font-size:10px; color:grey"> 大小：不能超过10M</p>
      </el-col>
    </el-row>


    <el-row>
      <el-col :span="4" :offset="2"> <p style="font-size:15px">      </p> </el-col>
    </el-row>

    <el-row>
      <el-col :span="4" :offset="2"> <p style="font-size:15px">      </p> </el-col>
    </el-row>
    
    
    <el-row>
      <el-col :span="4" :offset="2">
        昵称
      </el-col>

      <el-col :span="5" :offset="4">      
        性别
      </el-col>

      <el-col :span="5" :offset="2">      
        个人简介
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="4" :offset="2"> <p style="font-size:15px">      </p> </el-col>
    </el-row>

    <el-row>
      <el-col :span="4" :offset="2">
        <el-input size="medium" v-model="username" placeholder="请输入昵称"></el-input>
      </el-col>

      <el-col :span="5" :offset="4">      
          <el-radio size="medium" v-model="gender" label="1">男</el-radio>   
          <el-radio v-model="gender" label="2">女</el-radio>
      </el-col>

      <el-col :span="5" offset="2">      
         <el-input  v-model="desc" type="textarea" size="medium" placeholder="写下你的个性签名吧~"></el-input>
      </el-col>
    </el-row>

    <el-row>
      <el-col> <p style="font-size:15px">      </p> </el-col>
    </el-row>

    <el-row>
      <el-col :span="4" :offset="2">
        <el-button type="danger" round>保存</el-button>
      </el-col>
    </el-row>
</div>
</template>

<script>


 export default {
    components:{
  
    },
    data() {
      return {
        imageUrl: '',
        username: '',
        gender:' ',
        desc: ''

      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 5;

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

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }


  .upload {
    margin-top: 10px;
    margin-left:70px;
  }
  .word {
    color: grey;
    margin-top: -170px;
    margin-left:300px;
    font-size:10px;
  }
  .info {
    margin-top: 100px;
    margin-left:70px;
  }


  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

</style>