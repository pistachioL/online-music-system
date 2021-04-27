<template>
  <div >
    <el-row>
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

      <el-col :span="5" :offset="2">   
        <p style="font-size:15x;" > 头像上传 </p>
        <p style="font-size:10px; color:grey" > 格式：支持PNG/JPG格式的图片 </p>
        <p style="font-size:10px; color:grey"> 尺寸：建议尺寸200*200px </p>
        <p style="font-size:10px; color:grey"> 大小：不能超过10M</p>
      </el-col>
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
      <el-col :span="4" :offset="2">
        <el-input size="medium" :disabled="true"  v-model="getUsername" placeholder="请输入昵称"/>
      </el-col>

      <el-col :span="5" :offset="4">      
          <el-radio v-model="gender" label="男">男</el-radio>   
          <el-radio v-model="gender" label="女">女</el-radio>
      </el-col>

      <el-col :span="5" offset="2" >      
         <textarea v-model="desc" placeholder="写下你的个性签名吧~"/>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="4" :offset="2">
        <el-button type="danger" round @click="update"> 保存</el-button>
      </el-col>
    </el-row>
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
        // username: this.$store.state.user.currentUser,
        gender:'',
        desc: '',

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
      },

      update() {
        axios
        .post(`http://localhost:9091/editProfile?user=${this.currentName}&username=${this.getUsername}&gender=${this.gender}&desc=${this.desc}`)
        .then(response => {
            if(response.data.code == 0) {
              this.$store.dispatch('user/editAction')  //修改action
              this.$store.commit('user/changeProfile', this.desc);
              this.$message({
                showClose: true,
                message: '修改成功啦！',
                type: 'success'
              });
              this.$router.push('/user');
            }
            if(response.data.code == -2) {
              this.$message({
                showClose: true,
                message: '没有修改信息！',
                type: 'error'
              });
            }
        });
      },
    },

 
     computed: {
       
      ...mapState({
        currentName: state => state.user.currentUser,
      }),

      getUsername: {
        get() {
          return this.$store.state.user.currentUser
        },
        set () {
          this.$store.commit('setUsername', this.username)
        }
      },     
      
    },
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

  .el-row {
    margin-bottom: 20px;

  }

</style>