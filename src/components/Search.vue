<template>
  <div>

    <el-autocomplete style="width:250px" placeholder="搜索歌曲/歌手/MV" 
     @keyup.enter.native="onEnterPress"
     v-model="keyword"
     prefix-icon='el-icon-search'
     :trigger-on-focus="false"
     :fetch-suggestions="querySearch"
     clearable>
  <ul>
    历史记录:<br/> 
		<li v-for="(item,index) in historyList" :key="index"> {{item}}</li>
	</ul>
      <el-button size="mini" @click="empty" icon="el-icon-delete"> </el-button>
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
      historyList: [],
  
    }
  },
  mounted() {
    this.singers = this.loadAll();
     //如果本地存储的数据historyList有值，直接赋值给data中的historyList
    if (JSON.parse(localStorage.getItem("historyList"))) {
        this.historyList = JSON.parse(localStorage.getItem("historyList"));
    }
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
      else {
        if (!this.historyList.includes(this.keyword)) {
          this.historyList.unshift(this.keyword);
          localStorage.setItem("historyList", JSON.stringify(this.historyList));
        }
        else {
          //有搜索记录，删除之前的旧记录，将新搜索值重新push到数组首位
          let i =this.historyList.indexOf(this.keyword);
          this.historyList.splice(i,1)
          this.historyList.unshift(this.keyword);
          localStorage.setItem("historyList", JSON.stringify(this.historyList));
        }

         this.$router.push({  
           path: '/song/search',  
            name: 'Song',  
            query:{
              keyword: this.keyword
            }
        })  
    }
    },
  
    //清空历史搜索记录
    empty(){
        localStorage.removeItem('historyList');
        if(this.historyList === null) {
          this.$alert('清空历史搜索成功')
        }
        this.historyList = [];
    },
    click() {

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
        {"value":"邓丽君"},
        {"value":"邓典果DDG-甩脑壳 Cypher"},
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

 