<template>
  <div>

    <NavMenu />

  <el-image style="width: 200px; height: 200px" :src="this.img" :fit="fit"> </el-image>

  <el-button type="primary" icon="el-icon-video-play" round>全部播放</el-button>

  <el-table :data="popularList" style="width: 100%" >
      <el-table-column label="歌曲" prop="data.song_name" >   </el-table-column>
   
      <el-table-column label="歌手"  prop="data.author_name"  > </el-table-column>

      <el-table-column label="专辑名" prop="data.album_name" > </el-table-column>

    <el-table-column label="播放时长" prop="data.timelength"  :formatter="msToMin"> </el-table-column>
       
  </el-table> 
     <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">  点我打开 </el-button>
<el-table
      :data="tableData"
      style="width: 100%">
   
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>


      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
       
    </el-table>



<el-drawer
  title="我是标题"
  :visible.sync="drawer"
  :with-header="false">
  <span>我来啦!</span>
</el-drawer>

</div>
</template>

<script>
import NavMenu from './NavMenu.vue'
import axios from 'axios';


  export default {
//     headers: { 
//       'content-type': 'application/x-www-form-urlencoded；charset=UTF-8'
//  },
    components:{
      NavMenu,
    },
    data() {
      return {
        drawer: false,
        innerDrawer: false,
        popularList: this.popularList,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
    
      }
    },
    methods:{
      msToMin(row) {
        let ms = row.data.timelength
        let min = Math.floor((ms/1000/60) << 0),
        sec = Math.floor((ms/1000) % 60);
        sec = sec.toString().padStart(2, "0");
        return min + ':' + sec
      },
      
    },

    mounted() {
      axios
      .get(`http://localhost:9091/popularList`)
      .then(response => {
            console.log(response.data)
          this.popularList = response.data
          this.img = response.data[0].data.img
      })
    }
  };
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
</style>