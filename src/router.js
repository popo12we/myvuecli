import Vue from 'vue'
import Router from 'vue-router'
// 组件按需加载
const Home = () => import(/* webpackChunkName: 'home' */ './views/Home.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      // children: [
      //   { path: '/home/list', name: 'list', component: List },
      //   { path: '/home/cart', name: 'cart', component: Cart },
      //   { path: '/home/coupon', name: 'coupon', component: Coupon },
      // ],
    }
  ]
})
