//main.js用于加载js文件
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import Vuex from 'vuex'


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vuex)

new Vue({
  router,
  el: '#app',
  render: h => h(App),
}).$mount('#app')


