// 主页
<template>
<div>  
  <el-container>
    <el-header>
        <NavMenu />    

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

export default {
  name: 'HelloWorld',
  components: {
    NavMenu,
    Carousel,
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>