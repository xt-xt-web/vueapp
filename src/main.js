import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
//引入iconfont


import TopMenu from '@/components/TopMenu.vue'
import PublicBottom from '@/components/PublicBottom.vue'

Vue.use(ElementUI);
//定义全局的请求
axios.defaults.baseURL='http://localhost:3000'
Vue.prototype.axios=axios;


Vue.config.productionTip = false

Vue.component('top-menu',TopMenu)
Vue.component('public-bottom',PublicBottom)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
