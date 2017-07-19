<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>Current route name: {{ $route.path }}</p>
    
    <!-- 过渡动效 -->
    <transition name="fade" v-if="$route.path != '/home'">
      <keep-alive>
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
      </keep-alive>
    </transition>

    <!-- 命名视图 -->
    <div v-if="$route.path == '/home'">
      <h2>命名视图</h2>
      <!-- <keep-alive> -->
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view class="view one"></router-view>
        <router-view class="view two" name="a"></router-view>
        <router-view class="view three" name="b"></router-view>
      <!-- </keep-alive> -->
    </div>

    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <h2>常规路由</h2>
    <ul>
      <li><router-link to="/banana/yellow?id=1&name=ye#ripe">Go to banana</router-link></li>
      <li><router-link to="/apple" exact>Go to apple</router-link></li> <!-- 链接使用 "exact 匹配模式",仅当前地址才激活 -->
      <li><router-link to="/apple/red">Go to apple red</router-link></li>
      <li><router-link to="/apple/green">Go to apple green</router-link></li>
    </ul>
    <h2>编程式路由</h2>
    <ul>
      <li><router-link :to="{ name: 'Banana', params: { color: 'yellow' }, query: { id: 1, name: 'yell'},hash: '#ripee'}">Go to banana</router-link></li> <!-- 命名的路由,带查询参数 -->
      <li><router-link :to="{path: '/apple'}" exact>Go to apple</router-link></li> <!-- 对象形式 -->
      <li><router-link :to="'/apple/red'">Go to apple red</router-link></li> <!-- 字符串形式 设置 replace 属性的话，当点击时，会调用 router.replace() 而不是 router.push()，于是导航后不会留下 history 记录。-->
      <li><router-link :to="{ name: 'Green'}" replace>Go to apple green</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 1000px;
}
ul {
  width: 300px;
  margin: 0 auto;
}
.active {
  color: #f00;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
