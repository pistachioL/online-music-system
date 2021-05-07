<template>
  <div>
      <el-container> 
        <el-main>
      <el-row>
        <el-col :span="24"> <h2 style="display:inline"> 天籁推荐 </h2> </el-col>
      </el-row>
    
    <el-row :gutter="12">
      <el-col :span="5">
        <el-card shadow="hover">
             <el-image style="width: 200px; height: 200px" :src="this.personalized[0].picUrl"> </el-image>
             {{this.personalized[0].name}}
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card shadow="hover">
           <el-image style="width: 200px; height: 200px" :src="this.personalized[1].picUrl"> </el-image>
           {{this.personalized[1].name}}
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.personalized[2].picUrl" > </el-image>
            {{this.personalized[2].name}}
        </el-card>
      </el-col>
   
       <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.personalized[3].picUrl"> </el-image>
            {{this.personalized[3].name}}
        </el-card>
      </el-col>

           <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.personalized[4].picUrl"> </el-image>
            {{this.personalized[4].name}}
        </el-card>
      </el-col>

           <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.personalized[5].picUrl"> </el-image>
            {{this.personalized[5].name}}
        </el-card>
      </el-col>


      <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.personalized[7].picUrl"> </el-image>
            {{this.personalized[7].name}}
        </el-card>
      </el-col>

        <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.personalized[6].picUrl"> </el-image>
            {{this.personalized[6].name}}
        </el-card>
      </el-col>

          <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.personalized[8].picUrl"> </el-image>
            {{this.personalized[8].name}}
        </el-card>
      </el-col>


         <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.personalized[19].picUrl"> </el-image>
            {{this.personalized[19].name}}
        </el-card>
      </el-col>

          <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.personalized[10].picUrl"> </el-image>
            {{this.personalized[10].name}}
        </el-card>
      </el-col>

     <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.personalized[11].picUrl"> </el-image>
            {{this.personalized[11].name}}
        </el-card>
      </el-col> 

      <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.personalized[12].picUrl"> </el-image>
            {{this.personalized[12].name}}
        </el-card>
      </el-col> 

      <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.personalized[13].picUrl"> </el-image>
            {{this.personalized[13].name}}
        </el-card>
      </el-col> 
      <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.personalized[14].picUrl"> </el-image>
            {{this.personalized[14].name}}
        </el-card>
      </el-col> 
           <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.personalized[15].picUrl"> </el-image>
            {{this.personalized[15].name}}
        </el-card>
      </el-col> 

           <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.personalized[16].picUrl"> </el-image>
            {{this.personalized[16].name}}
        </el-card>
      </el-col> 
           <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.personalized[17].picUrl"> </el-image>
            {{this.personalized[17].name}}
        </el-card>
      </el-col> 
           <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.personalized[18].picUrl"> </el-image>
            {{this.personalized[18].name}}
        </el-card>
      </el-col> 
           <el-col :span="5">
        <el-card shadow="hover">
            <el-image style="width: 200px; height: 200px" :src="this.personalized[20].picUrl"> </el-image>
            {{this.personalized[20].name}}
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
        personalized: this.personalized,
      }
   },
    // created() {
    //   this.$emit('header', true)
    // },
    mounted() {
    //网易云推荐新音乐
    axios
    .get(`https://autumnfish.cn/personalized/newsong?limit=30`)
    .then(response => {
        this.personalized = response.data.result
        console.log(this.personalized)
    });



  },
     
  };
</script>

<style>

  
</style>