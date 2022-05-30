import { createWebHistory, createRouter } from 'vue-router'

const history = createWebHistory()

const router = createRouter({
  history, // 路由模式
  routes: [
    {
      // 首页
      path: '/',
      name: 'home',
      component: () => import('@/pages/home')
    },{
      // 应用
      path: '/app',
      name: 'app',
      component: () => import('@/pages/app')
    },{
      // 设置
      path: '/setting',
      name: 'setting',
      component: () => import('@/pages/setting')
    },{
      // 关于
      path: '/about',
      name: 'about',
      component: () => import('@/pages/about')
    }
  ]
})


export default router