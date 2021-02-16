// 主页
<template>
<div>  
  <el-container>
    <el-header>
        <NavMenu />    
        <!-- <Input />
        <Login /> -->

    </el-header>
    <el-main>
    <Carousel />
 
    </el-main>

    <el-footer>
      
    </el-footer>
  
  </el-container>
</div>
  
</template>

<script>
import NavMenu from './NavMenu.vue'
import Carousel from './Carousel.vue'
// import Input from './Input.vue'
// import Login from './Login.vue'
export default {
  name: 'HelloWorld',
  components: {
    NavMenu,
    Carousel,
    // Input,
    // Login,
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>