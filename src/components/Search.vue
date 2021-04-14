<template>
  <div>
   <NavMenu />

    <el-input style="width:250px" placeholder="搜索歌曲/歌手/MV" 
     @keyup.enter.native="onEnterPress"
     v-model="keyword"
     prefix-icon='el-icon-search'>
  </el-input>

</div>
</template>


<script>

import NavMenu from './NavMenu.vue'
export default {
  data() {
    return {
      keyword: "",
      searchRes: [],
    }
  },
  mounted() {

   },
  components:{
      NavMenu,
    },
  methods: {
    onEnterPress() {
         this.$router.push({  
            path: '/Song',   
            name: 'Song',  
            params: {   
                keyword: this.keyword
            }  
           
        })  


    },
    
  }
   
} 

</script>

 