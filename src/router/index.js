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
        component: () => import('@/views/homepage')
        // children: [
        //   {
        //     path: '/decompression-life-song', // 默认子路由
        //     name: 'life-song-page',
        //     component: () => import('@/views/decompression-life-song')
        //   }

        // ]
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
  },
  {
    // 签到-问候页

    path: '/punch-togreetpage',
    name: 'togreet-page',
    component: () => import('@/views/punch-togreetpage')
  },
  {
    // 签到-签到成功页

    path: '/punch-signIn',
    name: 'siginInpage',
    component: () => import('@/views/punch-signIn')
  },
  {
    // 签到-分享页

    path: '/punch-sharepage',
    name: 'sharepage',
    component: () => import('@/views/punch-sharepage')
  },
  {
    // 签到-打卡 早 晚

    path: '/punch-Clockin',
    name: 'clickinpage',
    component: () => import('@/views/punch-Clockin')
  },
  {
    // 签到-打卡 中午
    path: '/punch-Clocknoon',
    name: 'clicknoonpage',
    component: () => import('@/views/punch-Clocknoon')
  },

  {
    // 减压助眠-个人中心页
    path: '/decompression-personal',
    name: 'd-personpage',
    component: () => import('@/views/decompression-personal')
  },
  {
    // 减压助眠-个人中心页
    path: '/decompression-playerpage',
    name: 'd-playerpage',
    component: () => import('@/views/decompression-playerpage')
  },
  {
    // 减压助眠-tabbar
    path: '/life-tab-bar',
    name: 'life-tab-bar',
    component: () => import('@/views/life-tab-bar')
  },
  { // 减压助眠-人生如歌
    path: '/decompression-life-song',
    name: 'life-song-page',
    component: () => import('@/views/decompression-life-song')
  },

  { // 减压助眠-音乐
    path: '/decompression-music',
    name: 'musicpage',
    component: () => import('@/views/decompression-music')
  },
  { // 减压助眠-音乐播放页面
    path: '/decompression-music-playpage',
    name: 'music-play',
    component: () => import('@/views/decompression-music-playpage')
  },
  { // 减压助眠身心灵页面
    path: '/decompression-Body-m-s',
    name: 'bms-page',
    component: () => import('@/views/decompression-Body-m-s')

  },
  { // 减压助眠-身心灵-排序页面
    path: '/decompression-Sortingcomplete',
    name: 'Sorting-page',
    component: () => import('@/views/decompression-Sortingcomplete')
  },
  { // 减压助眠-身心灵-家庭
    path: '/decompression-family',
    name: 'Sorting-page',
    component: () => import('@/views/decompression-family')

  },
  { // 减压助眠-身心灵-播放页面
    path: '/decompression-playpage',
    name: 'playpage',
    component: () => import('@/views/decompression-playpage')

  },
  { // 我的-实名认证
    path: '/my-Realname',
    name: 'my-Realname',
    component: () => import('@/views/my-Realname')

  },
  { // 我的-实名认证-详情页
    path: '/my-IDauthentication',
    name: 'ID-page',
    component: () => import('@/views/my-IDauthentication')

  },
  { // 我的-关于我们
    path: '/my-Aboutus',
    name: 'Aboutus-page',
    component: () => import('@/views/my-Aboutus')

  },

  { // 我的-地址管理
    path: '/my-Addressmanagement',
    name: 'Address-page',
    component: () => import('@/views/my-Addressmanagement')

  },
  { // 我的-新增地址
    path: '/my-Addharvestaddress',
    name: 'A-harvestaddress-page',
    component: () => import('@/views/my-Addharvestaddress')
  },
  { // 我的-推送设置
    path: '/my-Pushsettings',
    name: 'Pushsettingspage',
    component: () => import('@/views/my-Pushsettings')
  },
  { // 我的-推送设置
    path: '/my-Punchuser',
    name: 'punchuser-page',
    component: () => import('@/views/my-Punchuser')
  },
  { // 我的-我的收益
    path: '/my-myprofit',
    name: 'profit-page',
    component: () => import('@/views/my-myprofit')
  },
  { // 我的-我的订单
    path: '/my-Myorder',
    name: 'myorder-page',
    component: () => import('@/views/my-Myorder')
  },
  { // 我的-我的订单-订单详情
    path: '/my-Orderdetails',
    name: 'Order-details-page',
    component: () => import('@/views/my-Orderdetails')
  },
  { // 我的-我的订单-已完成
    path: '/my-Ordercompleted',
    name: 'Order-completed-page',
    component: () => import('@/views/my-Ordercompleted')
  },
  { // 我的-我的订单-已取消详情页
    path: '/my-Detailspagecancelled',
    name: 'D-page-cancelled',
    component: () => import('@/views/my-Detailspagecancelled')
  },
  { // 我的-我的订单-已取消详情页
    path: '/my-Allorders',
    name: 'All-orders-page',
    component: () => import('@/views/my-Allorders')
  },
  { // 我的-我的订单-待支付详情页
    path: '/my-DetailsToBepaid',
    name: 'Details-paid-page',
    component: () => import('@/views/my-DetailsToBepaid')
  },
  { // 我的-我的订单-待收货
    path: '/my-Tobereceived',
    name: 'To-b-received-page',
    component: () => import('@/views/my-Tobereceived')
  },
  { // 我的-我的订单-待发货详情页
    path: '/my-Detailpagetobedelivered',
    name: 'Detail-page',
    component: () => import('@/views/my-Detailpagetobedelivered')
  },
  { // 我的-我的订单-待发货详情页
    path: '/my-Platformcard',
    name: 'Platform-card-page',
    component: () => import('@/views/my-Platformcard')
  },
  { // 我的空间
    path: '/Myspace',
    name: 'My-space-page',
    component: () => import('@/views/Myspace')
  },
  { // 我的空间-编辑资料
    path: '/Myspace-Editinformation',
    name: 'Edit-information',
    component: () => import('@/views/Myspace-Editinformation')
  }
]

const router = new VueRouter({
  routes
})

export default router
