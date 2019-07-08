import Vue from 'vue'

//加载bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css'

import App from './App.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
