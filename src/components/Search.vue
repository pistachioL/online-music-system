<template>
  <div>

    <el-autocomplete style="width:250px" placeholder="搜索歌曲/歌手/MV" 
     @keyup.enter.native="onEnterPress"
     v-model="keyword"
     prefix-icon='el-icon-search'
     :trigger-on-focus="true"
     :fetch-suggestions="querySearch"
     clearable>
    </el-autocomplete>

  
          <!-- 历史记录<br>
          <ul>
            <li v-for="(item,index) in historyList" :key="index" @click="goSearchDetail(item)">{{item}}</li>
          </ul> -->
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
          this.pastHistory = true;
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
        this.pastHistory = fasle
    },
    //点击历史记录进行搜索
    goSearchDetail(title){
        this.keyword = title
        this.$router.push({
          path: "/song/search", 
          query: { 
            keyword: title,
          },
        });
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
        {"value":"邓丽欣"},
        {"value":"邓典果DDG-甩脑壳 Cypher"},
        {"value":"王嘉尔"},
        {"value":"陈奕迅"},
        {"value":"梅艳芳"},
        {"value":"周杰伦"},
        {"value":"周深"},
        {"value":"周哲兴"},
        {"value":"周慧敏"},
        {"value":"张信哲"},
        {"value":"张学友"},
        {"value":"张惠妹"},
        {"value":"林俊杰"},
        {"value":"张靓颖"},
        {"value":"许嵩"},
        {"value":"王力宏"},
        {"value":"薛之谦"},
        {"value":"毛不易"},
        {"value":"华晨宇"},
        {"value":"王菲"},
        {"value":"林达浪"},
        {"value":"汪苏泷"},


  
      ];
    },
    
  }
   
} 

</script>


<style scoped>

  .search_btn{
    display: inline;
  }

 .search_input{
        background: #f3f3f3;
        border: .5px solid #999999;
        border-radius: .4rem;
    }
    .search_bar{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
    }
   .suggestions{
       width: 86%;
       margin: 0 auto;
       border-top: 0.5px solid #dddddd;
       display: flex;
       flex-direction: row;
       justify-content: space-between;
       padding: .6rem 1rem;
       color: #666666;
       font-size: .8rem;
   }
   .suggestions:active{
       color: #007cdc;
   }
   .history_suggestion{
       font-size: 1rem;
   }
   .history_suggestion_title{
       font-size: .8rem;
       color: #aaaaaa;
       text-align: center;
       display: flex;
       flex-direction: row;
       align-items: flex-end;
       margin-bottom: .2rem;
       margin-left: 40%;
       position: relative;
   }
   .history_clear{
       font-size: .68rem;
       position: absolute;
       right: 4%;
       display: flex;
       flex-direction: row;
   }
   .history_clear:active{
       color: black;
   }
    .search_input input[type="text"]{
        width: 80%;
        margin-top: .1rem;
        margin-bottom: .1rem;
        margin-left: .32rem;
        font-size: 18px;
        border: 0;
        outline: none;
        padding-top: .4rem;
        padding-bottom: .4rem;
        background: #f3f3f3;
        color: #666666;
    }
    .search_input input[type="text"]::placeholder{
        color: #999999;
    }
    .icon{
        width: 1.6rem;
        height: 1.6rem;
        margin-left: .6rem;
    }
    .clear_icon{
        width: .82rem;
        height: .82rem;
        opacity: 0.5;
    }
    .clear_icon:active{
        opacity: 1;
    }

</style>

 