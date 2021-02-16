import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router' //路由

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueRouter);


new Vue({
  VueRouter,
  el: '#app',
  render: h => h(App),
}).$mount('#app')


VueRouter.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  const type = to.meta.type
  console.log(type)
  console.log(111)
  // 判断该路由是否需要登录权限
  if (type === 'login') {
    if (window.localStorage.getItem('login')) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()  // 确保一定要有next()被调用
 } 
})