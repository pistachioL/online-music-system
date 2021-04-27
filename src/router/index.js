
import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router
import Login from '@/components/login/login.vue'  //引入根目录下的登录组件
import githubLogin from '@/components/login/githubLogin.vue'  //引入根目录下的登录组件
import HelloWorld from '@/pages/HelloWorld.vue'  //引入根目录下的Hello.vue组件
import PopularList from '@/pages/popularList.vue'  //引入根目录下的Hello.vue组件
import MyMusic from '@/pages/myMusic.vue'  //引入根目录下的Hello.vue组件
import Song from '@/pages/searchSong.vue'  //引入根目录下的Hello.vue组件
import UserHome from '@/pages/userHome.vue'  //引入根目录下的Hello.vue组件
import EditProfile from '@/pages/editProfile.vue'  //引入根目录下的Hello.vue组件


Vue.use(Router)

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta:{
            navShow: false
        }
    },
    {
        path: '/oauth/redirect', //github授权页面
        name: 'github',
        component: githubLogin,
        meta:{
            navShow: false
        }
    },
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
        meta: {
            requiresAuth: true,
            navShow: true
        },
    },
    {
        path: '/popularList',
        name: '音乐榜单',
        component: PopularList,
        meta:{
            navShow: true
        }
    },
    {
        path: '/song/search',
        name: 'Song',
        component: Song,
        meta: {
            title: '搜索',
            keepAlive: true,
            navShow: true
          }
    },
 
    {
        path: '/myMusic',
        name: '我的音乐盒',
        component: MyMusic,
        meta: {
            requiresAuth:true,
            navShow: true
        },
    },
    {
        path: '/user',
        name: '个人中心',
        component: UserHome,
        meta: {
            requiresAuth:true,
            navShow: true
        },
    },
    {
        path: '/user/edit',
        name: '编辑资料',
        component: EditProfile,
        meta: {
            requiresAuth:true,
            navShow: true
            
        },
    },

  ]

/*配置路由*/
const router = new Router({
    mode: 'history',
    routes
})


router.beforeEach((to, from, next) => {
    if (to.matched.some(route => route.meta.requiresAuth)) {
      if (localStorage.getItem('username')) {   //通过localstorage存储
        next();
      } else {
        next({// 没有登录信息跳转到登录页
            path: "/login",
            // query: { redirect: to.fullPath }  // 'to.fullPath'跳转到登录之前页面的路径
          });
       
      }
    } else {
      next();// 确保一定要调用 next()
    }
  });
  
  
export default router
