<template>
  <div>

    <el-autocomplete style="width:250px" placeholder="搜索歌曲/歌手/MV" 
     @keyup.enter.native="onEnterPress"
     v-model="keyword"
     prefix-icon='el-icon-search'
     :fetch-suggestions="querySearch">

    </el-autocomplete>


</div>
</template>


<script>
export default {
  data() {
    return {
      keyword: "",
      searchRes: [],
      singers: [],
    }
  },
  mounted() {
    this.singers = this.loadAll();
  },
  components:{
     
    },
  methods: {
    // 回车即可跳转到song页面
    onEnterPress() {
       if (this.keyword.replace(/(^\s+)|(\s+$)/g, '') === '') {
        this.$alert('搜索内容不能为空！')
        return
      }
         this.$router.push({  
            path: '/song/search',   
            name: 'Song',  
            query:{
              keyword: this.keyword
            }
        })  
    },

    //搜索建议
    querySearch(queryString, cb) {
      var singers = this.singers;
      var results = queryString ? singers.filter(this.createFilter(queryString)) : singers;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },

    createFilter(queryString) {
      return (singers) => {
        return (singers.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    //加载建议查询的数据
    loadAll() {
      return [
        {"value":"邓紫棋"},
        {"value":"王嘉尔"},
        {"value":"陈奕迅"},
        {"value":"梅艳芳"},

      ];
    },
    
  }
   
} 

</script>


<style scoped>

  

</style>

 