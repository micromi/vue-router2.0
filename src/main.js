// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 创建和挂载根实例。记得要通过 router 配置参数注入路由，从而让整个应用都有路由功能
  template: '<App/>',
  components: { App },
});
