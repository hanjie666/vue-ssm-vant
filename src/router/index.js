import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Mine from '../views/mine/Mine'
import Wangke from '../views/wangke/Wangke'
import Dashboard from '../views/tabbar/Dashboard'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/Dashboard',
    // 是否数据缓存
    meta: {
      keepAlive: true
    },
  },
  {
    // 根页面
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    children: [{
        path: '/dashboard',
        redirect: '/dashboard/home',
        // 是否数据缓存
        meta: {
          keepAlive: true
        },
      },
      {
        // 主页
        path: 'home',
        name: 'home',
        component: Home,
        // 是否数据缓存
        meta: {
          keepAlive: true
        }
      },
      {
        // 网课
        path: 'wangke',
        name: 'wangke',
        component: Wangke,
        // 是否数据缓存
        meta: {
          keepAlive: true
        }
      },
      {
        path: 'mine',
        name: 'mine',
        component: Mine,
        // 是否数据缓存
        meta: {
          keepAlive: true
        }
      }
    ]}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
