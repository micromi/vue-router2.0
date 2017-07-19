import Vue from 'vue';
import Router from 'vue-router';
// 1. 定义（路由）组件 (常规方法)
// import Home from '@/components/Home';
// import HomeOne from '@/components/HomeOne';
// import HomeTwo from '@/components/HomeTwo';
// import Apple from '@/components/Apple';
// import IndexApple from '@/components/IndexApple';
// import RedApple from '@/components/RedApple';
// import GreenApple from '@/components/GreenApple';
// import Banana from '@/components/Banana';
// import NotFound from '@/components/NotFound';

// 路由懒加载 (方法一)
/* eslint-disable */
const Home = resolve => require(['@/components/Home.vue'], resolve);
const HomeOne = resolve => require(['@/components/HomeOne'], resolve);
const HomeTwo = resolve => require(['@/components/HomeTwo'], resolve);
const Apple = resolve => require(['@/components/Apple'], resolve);
const IndexApple = resolve => require(['@/components/IndexApple'], resolve);
const RedApple = resolve => require(['@/components/RedApple'], resolve);
const GreenApple = resolve => require(['@/components/GreenApple'], resolve);
const Banana = resolve => require(['@/components/Banana'], resolve);
const NotFound = resolve => require(['@/components/NotFound'], resolve);
/* eslint-enable */

// 路由懒加载 (方法二)
// const Home = (resolve) => {
//   require.ensure(['@/components/Home.vue'], () => {
//     resolve(require('@/components/Home.vue'));
//   });
// };
// const HomeOne = (resolve) => {
//   require.ensure(['@/components/HomeOne.vue'], () => {
//     resolve(require('@/components/HomeOne.vue'));
//   });
// };
// const HomeTwo = (resolve) => {
//   require.ensure(['@/components/HomeTwo.vue'], () => {
//     resolve(require('@/components/HomeTwo.vue'));
//   });
// };
// const Apple = (resolve) => {
//   require.ensure(['@/components/Apple.vue'], () => {
//     resolve(require('@/components/Apple.vue'));
//   });
// };
// const IndexApple = (resolve) => {
//   require.ensure(['@/components/IndexApple.vue'], () => {
//     resolve(require('@/components/IndexApple.vue'));
//   });
// };
// const RedApple = (resolve) => {
//   require.ensure(['@/components/RedApple.vue'], () => {
//     resolve(require('@/components/RedApple.vue'));
//   });
// };
// const GreenApple = (resolve) => {
//   require.ensure(['@/components/GreenApple.vue'], () => {
//     resolve(require('@/components/GreenApple.vue'));
//   });
// };
// const Banana = (resolve) => {
//   require.ensure(['@/components/Banana.vue'], () => {
//     resolve(require('@/components/Banana.vue'));
//   });
// };
// const NotFound = (resolve) => {
//   require.ensure(['@/components/NotFound.vue'], () => {
//     resolve(require('@/components/NotFound.vue'));
//   });
// };

Vue.use(Router);

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是通过 Vue.extend() 创建的组件构造器，或者，只是一个组件配置对象。
const routes = [
  {
    path: '/',
    // redirect: '/apple',  // 方式一
    // redirect: { name: 'Apple' }, // 方式二
    redirect() { // 方式三
      return '/home';
    },
  },
  {
    path: '/home',
    alias: '/index', // 别名,当用户访问/index时,URL会保持为/index,但是路由匹配则为/home,就像用户访问/home一样
    name: 'Home',
    components: { // 命名视图
      default: Home,
      a: HomeOne,
      b: HomeTwo,
    },
  },
  {
    path: '/banana/:color',
    name: 'Banana',
    component: Banana,
  },
  {
    path: '/apple',
    // name: 'Apple',
    component: Apple,
    meta: {
      scrollToTop: true,
    },
    children: [
      {
        // 当 /apple 匹配成功，
        // IndexApple 会被渲染在 Apple 的 <router-view> 中
        path: '',
        name: 'indexApple',
        component: IndexApple,
      },
      {
        // 当 /apple/red 匹配成功，
        // RedApple 会被渲染在 Apple 的 <router-view> 中
        path: 'red',
        name: 'Red',
        component: RedApple,
      },
      {
        // 当 /apple/green 匹配成功，
        // GreenApple 会被渲染在 Apple 的 <router-view> 中
        path: 'green',
        name: 'Green',
        component: GreenApple,
      },
    ],
  },
  {
    path: '*',
    name: '404',
    component: NotFound,
  },
];

// 滚动行为 - scrollBehavior:
// - 注意: 这个功能只在 HTML5 history 模式下可用
// - scrollBehavior 方法接收 to 和 from 路由对象。
//   第三个参数 savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用
// - 默认没有滚动行为，返回false阻止滚动行为
const scrollBehavior = (to, from, savedPosition) => {
  let position;
  if (savedPosition) {
    position = savedPosition;
  } else {
    const location = {};
    // 通过返回的选择器滚动到锚点
    if (to.hash) {
      location.selector = to.hash;
    }
    // 检查是否匹配路由配置元,需要滚动到顶部
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // 如果没有提供选择器,或者选择器不匹配任何元素，将返回到顶部 { x: 0, y: 0 }
      location.x = 0;
      location.y = 0;
    }
    // 如果返回的位置false或一个空对象,将保留当前滚动的位置，不会发生滚动。
    position = location;
  }
  console.log(position);
  // 返回最终需要滚动的位置
  return position;
};

// 3. 创建 router 实例，然后传 `routes` 配置
export default new Router({
  linkActiveClass: 'active', // 设置链接激活时使用的 CSS 类名,默认值: "router-link-active"
  // mode: 'history', // 去掉路由哈希
  routes, // （缩写）相当于 routes: routes
  scrollBehavior,
});

// 4. 在main.js中创建和挂载根实例。
