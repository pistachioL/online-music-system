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
   

    <el-card class="box-card">
       <h1 style="display:inline"> 我的收藏 </h1> <el-link type="primary" href='/user/collection' :underline="false">更多☞</el-link>         
        <el-table 
          :data="collectList"
          v-loading="loading"
          element-loading-text="努力加载飙升榜数据..."
          element-loading-spinner="el-icon-loading" 
          type="index"
          style="width: 100%">
        
            <el-table-column label="序号" > 
              <template slot-scope="scope">
                {{scope.$index+1}}
              </template>
            </el-table-column>

            <el-table-column label="歌曲" prop="song_name" >   </el-table-column>

            <el-table-column label="歌手"  prop="author_name"  > </el-table-column>

            <el-table-column label="专辑" prop="album_name" > </el-table-column>

            <el-table-column label="时长" prop="timelength" :formatter="msToMin"> </el-table-column>
        
            <el-table-column label="">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="play(scope.row)" icon="el-icon-video-play"></el-button>
                </template>
            </el-table-column>
        </el-table>
            ...... 

  

    </el-card>

    <el-card class="box-card">
      <el-row>
        <el-col>
          我创建的歌单
        </el-col>
      </el-row>
    </el-card>

    <el-divider></el-divider>



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
        collectList: [], //歌曲收藏记录
        collectImg: [], //收藏歌曲的封面
        collectName: [], //收藏歌曲的名字
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

      msToMin(row) {
        let ms = row.timelength
        let min = Math.floor((ms/1000/60) << 0),
        sec = Math.floor((ms/1000) % 60);
        sec = sec.toString().padStart(2, "0");
        return min + ':' + sec
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

        //查询收藏的歌曲
        axios
        .post(`http://localhost:9091/queryFiveCollection?user=${this.currentName}`)
        .then(response => {
           if(response.data.length > 5) {
            for(var i = 0; i < 5; i++) {
                this.collectList.push(response.data[i])
                this.collectImg.push(response.data[i].img)
                this.collectName.push(response.data[i].song_name)
            }
          }
          else {
            for(var i = 0; i < response.data.length ; i++) {
                this.collectList.push(response.data[i])
                this.collectImg.push(response.data[i].img)
                this.collectName.push(response.data[i].song_name)
            }
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
    width: 80%;
    margin-left: 200px;
  }

  .el-row {
    margin-bottom: 20px;
  }

  .el-col {
   display:inline
  }
</style>