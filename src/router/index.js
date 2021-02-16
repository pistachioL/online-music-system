
import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router
import HelloWorld from '@/components/HelloWorld'  //引入根目录下的Hello.vue组件
import Login from '@/components/login'  //引入根目录下的Hello.vue组件
Vue.use(Router)

export default new Router({
    routes:[
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})