import Vue from 'vue'

//加载bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css'

import App from './App.vue'

import router from './router.js'


Vue.config.productionTip = false

new Vue({
  // 配置实例选项 router
  router,
  render: h => h(App),
}).$mount('#app')
