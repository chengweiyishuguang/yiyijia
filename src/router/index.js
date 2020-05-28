import Vue from 'vue'
import VueRouter from 'vue-router'
// import homepage from '../views/homepage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/tab-bar'),
    children: [
      {
        path: '', // 默认子路由
        name: 'homepage',
        component: () => import('@/views/homepage')
      },
      {
        path: '/shoppage',
        name: 'shoppage',
        component: () => import('@/views/shoppage')
      },
      {
        path: '/shoppingcarpage',
        name: 'shoppingcarpage',
        component: () => import('@/views/shoppingcarpage')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my')
      }
    ]

  },
  {
    path: '/night-lis-page',
    name: 'nigthpage',
    component: () => import('@/views/night-lis-page')
  }

]

const router = new VueRouter({
  routes
})

export default router
