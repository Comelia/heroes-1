import Vue from 'vue'

//加载bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css'

import App from './App.vue'

import router from './router.js'

import axios from 'axios'
// 配置axios的基地址, 调用请求方法的时候get(url),会自动把请求方法的路径拼接到及地址后面
axios.defaults.baseURL = 'http://localhost:3000'
// 让所有 Vue实例都具有一个属性axios , 给Vue构造函数的原型增加成员
Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  // 配置实例选项 router
  router,
  render: h => h(App),
}).$mount('#app')
