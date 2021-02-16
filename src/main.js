//main.js用于加载js文件
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import VueRouter from 'vue-router' //路由
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI);


new Vue({
  // VueRouter,
  router,
  el: '#app',
  render: h => h(App),
}).$mount('#app')


