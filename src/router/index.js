import Vue from 'vue'
import VueRouter from 'vue-router'
// import homepage from '../views/homepage'

Vue.use(VueRouter)

const routes = [
  { // tabbar页
    path: '/',
    component: () => import('@/views/tab-bar'),
    children: [
      { // 主页
        path: '', // 默认子路由
        name: 'homepage',
        component: () => import('@/views/homepage')
      },
      { // 购物
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
  { // 夜听页
    path: '/night-lis-page',
    name: 'nigthpage',
    component: () => import('@/views/night-lis-page')
  },
  { // 夜听播放页面
    path: '/playpage',
    name: 'playpage',
    component: () => import('@/views/playpage')
  },
  { // 夜听个人中心
    path: '/personalpage',
    name: 'personpage',
    component: () => import('@/views/personalpage')
  },
  { // 听书
    path: '/listen-book',
    name: 'listenpage',
    component: () => import('@/views/listen-book')
  },
  {
    // 听书 节目列表
    path: '/listen-Programlist',
    name: 'Programlist',
    component: () => import('@/views/listen-Programlist')
  },
  {
    // 听书简介
    path: '/listen-introduce',
    name: 'listen-introduce',
    component: () => import('@/views/listen-introduce')
  },
  {
    // 听书-评论学习

    path: '/listen-comment',
    name: 'comment',
    component: () => import('@/views/listen-comment')
  },
  {
    // 听书-评论-我的评论

    path: '/listen-Mycomments',
    name: 'mycomment',
    component: () => import('@/views/listen-Mycomments')
  },
  {
    // 听书-单曲循环页面

    path: '/listen-LoopPlayback',
    name: 'loop-playback',
    component: () => import('@/views/listen-LoopPlayback')
  },
  {
    // 听书-详情页

    path: '/listen-detailspage',
    name: 'detail-page',
    component: () => import('@/views/listen-detailspage')
  }

]

const router = new VueRouter({
  routes
})

export default router
