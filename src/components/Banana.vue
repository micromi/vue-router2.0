<template>
  <div class="banana">
    <h1>{{ msg }}</h1>
    <p>{{ $route.params.color }}</p>
    <button @click="getPath">get $route.path</button>
    <button @click="getParams">get $route.params</button>
    <button @click="getQuery">get $route.query</button><br/>
    <button @click="getHash">get $route.hash</button>
    <button @click="getFullPath">get $route.fullPath</button>
    <button @click="getName">get $route.name</button>
    <button @click="getMatched">get $route.matched</button>
    <button @click="routerBack">routerBack</button>
  </div>
</template>

<script>
export default {
  name: 'banana',
  data() {
    return {
      msg: ' 路由信息对象的属性(控制台查看结果) ... ',
    };
  },
  methods: {
    getPath() { // 字符串，对应当前路由的路径，总是解析为绝对路径,如 "/foo/bar"
      console.log(this.$route.path);
    },
    getParams() { // 一个 key/value 对象，包含了动态片段和全匹配片段，如果没有路由参数，就是一个空对象
      console.log(this.$route.params);
    },
    getQuery() { // 一个 key/value 对象，表示URL查询参数，如果没有查询参数，则是个空对象
      console.log(this.$route.query);
    },
    getHash() { // 当前路由的 hash 值 (带 #) ，如果没有 hash 值，则为空字符串
      console.log(this.$route.hash);
    },
    getFullPath() { // 完成解析后的 URL，包含查询参数和 hash 的完整路径
      console.log(this.$route.fullPath);
    },
    getName() { // 当前路由的名称，如果有的话
      console.log(this.$route.name);
    },
    getMatched() { // 一个数组，包含当前路由的所有嵌套路径片段的 路由记录 。路由记录就是 routes 配置数组中的对象副本（还有在 children 数组）
      console.log(this.$route.matched);
    },
    routerBack() {
      this.$router.go(-1); // 回到上一级页面
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
button {
  margin-bottom: 5px;
}
</style>
