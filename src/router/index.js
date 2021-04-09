
import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router
import Login from '@/components/login.vue'  //引入根目录下的登录组件
import githubLogin from '@/components/githubLogin.vue'  //引入根目录下的登录组件
import HelloWorld from '@/components/HelloWorld.vue'  //引入根目录下的Hello.vue组件
import PopularList from '@/components/PopularList.vue'  //引入根目录下的Hello.vue组件
import MyMusic from '@/components/MyMusic.vue'  //引入根目录下的Hello.vue组件
import Song from '@/components/Song.vue'  //引入根目录下的Hello.vue组件
import UserHome from '@/components/UserHome.vue'  //引入根目录下的Hello.vue组件
Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/oauth/redirect', //github授权页面
        name: 'github',
        component: githubLogin 
    },
    {
        path: '/HelloWorld',
        name: 'HelloWorld',
        component: HelloWorld,
        meta: {
            requiresAuth:true
        },
    },
    {
        path: '/popularList',
        name: '音乐榜单',
        component: PopularList
    },
    {
        path: '/song',
        name: '单曲',
        component: Song,
    },
    {
        path: '/myMusic',
        name: '我的音乐盒',
        component: MyMusic,
        meta: {
            requiresAuth:true
        },
    },
    {
        path: '/user',
        name: '个人中心',
        component: UserHome,
        meta: {
            requiresAuth:true
        },
    },
  ]

/*配置路由*/
const router = new Router({
    mode: 'history',
    routes
})


export default router

// 是否登录的路由拦截
// router.beforeEach((to, from, next) => {
//     if(to.matched.some((r) => r.meta.auth))
// })