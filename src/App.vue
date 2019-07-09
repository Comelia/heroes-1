<template>
  <div id="app">
    <!-- 导航栏组件 -->
    <app-header></app-header>
  <div class="container-fluid">
    <div class="row">
      <!-- 侧边栏组件 -->
      <app-sildbar></app-sildbar>
      <!-- 列表 -->
      <router-view></router-view>
    </div>
  </div>
  </div>
</template>

<script>
// 1.导入组件
import AppHeader from './components/AppHeader.vue';
import AppSildbar from './components/AppSildbar.vue';


export default {
  name: 'app',

  // 2.注册AppHeader组件
  components: {
    AppHeader,
    AppSildbar
  } 
}
</script>

<style>

</style>
