// 全局注册组件
import layoutheader from './home/layout-header'// 头部组件
// import layoutprogress from './home/layout-progress.vue'
import layoutaudio from './night/layout-audio.vue'// 听书模块组件
import listoptions from './play/list-options.vue'// 听书播放页面收藏弹层
import layoutbanner from './play/layout-banner.vue'// 听书播放页面banner部分
import layoutplayfooter from './play/layout-playfooter.vue'// 听书播放页面底部分
import numsets from './personal/num-sets.vue'// 个人中心播放集数组件弹层
import laypotpro from './home/layout-progress.vue'// 播放器进度条组件
import layoutpublic from './listen/layout-public.vue'// 听书节目列表公共组件
import layoutcomment from './comment/layout-comment.vue'// 听书-评论列表
import punchlist from './punch/punch-list.vue'// 变成我的问候列表组件
import punchheader from './punch/punch-header'// 变成我的问候头部组件
import punchfooter from './punch/punch-footer'// 变成我的问候底部区域组件
import progresscircle from './personal/progress-circle'// 夜听和减压个人中心页下方播放按钮
import detailsintroduce from './personal/details-introduce.vue'// 夜听和减压个人中心页banner介绍区域
import detailslist from './personal/details-list.vue'// 夜听和减压个人中心页列表区域
import layoutplayer from './personal/layout-player.vue'// 夜听和减压个人中心页底部播放组件
import layoutprogress from './decompression/d-progress.vue'// 减压助眠播放页面进度条
import dlistPopup from './decompression/d-listPopup.vue'// 减压助眠播放页面列表弹层
import dtimeList from './decompression/d-time-list.vue'// 减压助眠播放页面定时弹层
import layoutsearch from './night/layout-search.vue'// 夜听搜索框
import layoutfixed from './night/layout-fixed.vue'// 夜听红色固定框
import layoutsblayer from './decompression/d-Sortingbomblayer.vue'// 减压助眠-身心灵-综合排序弹层
import decbanner from './decompression/d-layout-banner.vue'// 减压助眠banner区域
import Setfrequency from './my/Set-frequency.vue'// 我的-推送页面-弹层
export default {
  install (Vue) {
    Vue.component('layoutheader', layoutheader)
    Vue.component('layoutaudio', layoutaudio)
    Vue.component('listoptions', listoptions)
    Vue.component('numsets', numsets)
    Vue.component('laypotpro', laypotpro)
    Vue.component('layoutpublic', layoutpublic)
    Vue.component('layoutcomment', layoutcomment)
    Vue.component('punchlist', punchlist)
    Vue.component('punchheader', punchheader)
    Vue.component('punchfooter', punchfooter)
    Vue.component('progresscircle', progresscircle)
    Vue.component('detailsintroduce', detailsintroduce)
    Vue.component('detailslist', detailslist)
    Vue.component('layoutplayer', layoutplayer)
    Vue.component('layoutbanner', layoutbanner)
    Vue.component('layoutplayfooter', layoutplayfooter)
    Vue.component('layoutprogress', layoutprogress)
    Vue.component('dlistPopup', dlistPopup)
    Vue.component('dtimeList', dtimeList)
    Vue.component('layoutsearch', layoutsearch)
    Vue.component('layoutfixed', layoutfixed)
    Vue.component('layoutsblayer', layoutsblayer)
    Vue.component('decbanner', decbanner)
    Vue.component('Setfrequency', Setfrequency)
  }
}
