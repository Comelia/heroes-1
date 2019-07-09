// 导入vue
import Vue from 'vue'

// 导入 vue-router
import VueRouter from 'vue-router';
Vue.use(VueRouter)
// 导入组件
import HeroList from './views/hero/HeroList.vue'
import WeqponList from './views/weapon/WeqponList.vue'
import EquipList from './views/equip/EquipList.vue'


// 创建路由对象 
const router = new VueRouter({
    // 当浏览器地址栏中的路由地址 #/hero/add 包含router-link生成的标签的herf地址, 添加类样式
    linkActiveClass: 'active',
    // 配置路由规则
    routes: [
        { path: '/' , redirect: { name: 'hero' } },
        { name: 'hero' ,path: '/hero' , component: HeroList },
        { name: 'weapon' ,path: '/weapon' , component: WeqponList },
        { name: 'equip' ,path: '/equip' , component: EquipList },
    ]


});

// 导出路由
export default router;