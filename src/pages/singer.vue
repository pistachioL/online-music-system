

<template>
  <div>
      <el-container> 
        <el-main>
      <el-row>
        <el-col :span="24"> <h2 style="display:inline"> 热门歌手 </h2> </el-col>
      </el-row>
    
    <el-row :gutter="12">
      <el-col :span="5">
        <el-card shadow="hover">
             <el-image style="width: 200px; height: 200px" :src="this.singer[0].picUrl"> </el-image>
             {{this.singer[0].name}}
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card shadow="hover">
           <el-image style="width: 200px; height: 200px" :src="this.singer[1].picUrl"> </el-image>
           {{this.singer[1].name}}
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.singer[2].picUrl" > </el-image>
            {{this.singer[2].name}}
        </el-card>
      </el-col>
   
       <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.singer[3].picUrl"> </el-image>
            {{this.singer[3].name}}
        </el-card>
      </el-col>

           <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.singer[4].picUrl"> </el-image>
            {{this.singer[4].name}}
        </el-card>
      </el-col>

           <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.singer[5].picUrl"> </el-image>
            {{this.singer[5].name}}
        </el-card>
      </el-col>


      <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.singer[7].picUrl"> </el-image>
            {{this.singer[7].name}}
        </el-card>
      </el-col>

        <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.singer[6].picUrl"> </el-image>
            {{this.singer[6].name}}
        </el-card>
      </el-col>

        <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.singer[8].picUrl"> </el-image>
            {{this.singer[8].name}}
        </el-card>
      </el-col>
            <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.singer[9].picUrl"> </el-image>
            {{this.singer[9].name}}
        </el-card>
      </el-col>
            <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.singer[10].picUrl"> </el-image>
            {{this.singer[10].name}}
        </el-card>
      </el-col>
            <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.singer[11].picUrl"> </el-image>
            {{this.singer[11].name}}
        </el-card>
      </el-col>
            <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.singer[12].picUrl"> </el-image>
            {{this.singer[12].name}}
        </el-card>
      </el-col>
            <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.singer[13].picUrl"> </el-image>
            {{this.singer[13].name}}
        </el-card>
      </el-col>
            <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.singer[14].picUrl"> </el-image>
            {{this.singer[14].name}}
        </el-card>
      </el-col>
            <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.singer[15].picUrl"> </el-image>
            {{this.singer[15].name}}
        </el-card>
      </el-col>
            <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.singer[16].picUrl"> </el-image>
            {{this.singer[16].name}}
        </el-card>
      </el-col>
            <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.singer[17].picUrl"> </el-image>
            {{this.singer[17].name}}
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.singer[18].picUrl"> </el-image>
            {{this.singer[18].name}}
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.singer[19].picUrl"> </el-image>
            {{this.singer[19].name}}
        </el-card>
      </el-col>
           <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.singer[20].picUrl"> </el-image>
            {{this.singer[20].name}}
        </el-card>
      </el-col>
           <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.singer[21].picUrl"> </el-image>
            {{this.singer[21].name}}
        </el-card>
      </el-col>
           <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.singer[22].picUrl"> </el-image>
            {{this.singer[22].name}}
        </el-card>
      </el-col>
           <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.singer[23].picUrl"> </el-image>
            {{this.singer[23].name}}
        </el-card>
      </el-col>
           <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.singer[24].picUrl"> </el-image>
            {{this.singer[24].name}}
        </el-card>
      </el-col>
           <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.singer[25].picUrl"> </el-image>
            {{this.singer[25].name}}
        </el-card>
      </el-col>
           <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.singer[26].picUrl"> </el-image>
            {{this.singer[26].name}}
        </el-card>
      </el-col>
           <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.singer[27].picUrl"> </el-image>
            {{this.singer[27].name}}
        </el-card>
      </el-col>
           <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.singer[28].picUrl"> </el-image>
            {{this.singer[28].name}}
        </el-card>
      </el-col>
           <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.singer[29].picUrl"> </el-image>
            {{this.singer[29].name}}
        </el-card>
      </el-col>
           <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.singer[30].picUrl"> </el-image>
            {{this.singer[30].name}}
        </el-card>
      </el-col>

                 <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.singer[31].picUrl"> </el-image>
            {{this.singer[31].name}}
        </el-card>
      </el-col>


    </el-row>


            </el-main>
        </el-container>
    </div>
</template>



<script>


import axios from 'axios'
  export default {
    components:{

    },
   data() {
     return {
        singer: this.singer,
      }
   },

    mounted() {
    //网易云推荐新音乐
    axios
    .get(`https://autumnfish.cn/top/artists?offset=0&limit=40`)
    .then(response => {
        this.singer = response.data.artists
        console.log(this.singer)
    });



  },
     
  };
</script>

<style>

  
</style>

