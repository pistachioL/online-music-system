
import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router
import Login from '@/components/login.vue'  //引入根目录下的登录组件
import HelloWorld from '@/components/HelloWorld.vue'  //引入根目录下的Hello.vue组件

Vue.use(Router)

/*配置路由*/
const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'login',
        component: Login
      },
      {
        path: '/HelloWorld',
        name: 'HelloWorld',
        component: HelloWorld
      },
    ]
  })


export default router