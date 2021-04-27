
<template>
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

           <!-- 收藏功能 -->
             <!-- <el-table-column label=" " prop="like"     :filter-method=" filterLike"
               :filters="[{ text: true, value: true }, { text: false, value: false }]">
                <template slot-scope="scope">
                  <el-button @click="collect(scope.$index, scope.row)"  :type="scope.row.like === true ? 'primary' : 'success'"  disable-transitions size="small"  >  
                    like: {{scope.row.like}}
                    <img width="15px" height="15px" :src="scope.row.like === true ? collected  : uncollected" /> 
                  </el-button>
                </template>
            </el-table-column> -->

      <el-table-column prop="like" label=" ">
        <template slot-scope="scope">
          <img width="15px" height="15px" @click="change(scope.$index, scope.row)" :src="scope.row.like === true ? collected : uncollected" >
        </template>
     </el-table-column>

    </el-table>
</template>



  <script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            like: false
     
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
        isCollected: new Array(50).fill(false),
     
        uncollected:require('../assets/uncollected.png'),
        collected:require('../assets/collected.png')
        
        }
      },
      methods:{
      // resetDateFilter() {
      //   this.$refs.filterTable.clearFilter('date');
      // },
      // clearFilter() {
      //   this.$refs.filterTable.clearFilter();
      // },
      // formatter(row, column) {
      //   return row.like;
      // },
      // filterLike(value, row) {
      //   return row.like === value;
      // },
      // filterHandler(value, row, column) {
      //   const property = column['property'];
      //   return row[property] === value;
      // },
      change(index, row){
        console.log('data', this.tableData)
        console.log(this.tableData[index].like)
        this.tableData[index].like = row.like === false? true: false;

      }

      }
    }
  </script>



