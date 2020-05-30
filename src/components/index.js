// 全局注册组件
import layoutheader from './home/layout-header'// 头部组件
import layoutaudio from './night/layout-audio.vue'// 听书模块组件
import listoptions from './play/list-options.vue'// 听书播放页面收藏弹层
import numsets from './personal/num-sets.vue'// 个人中心播放集数组件弹层
import laypotpro from './home/layout-progress.vue'// 播放器进度条组件

export default {
  install (Vue) {
    Vue.component('layoutheader', layoutheader)
    Vue.component('layoutaudio', layoutaudio)
    Vue.component('listoptions', listoptions)
    Vue.component('numsets', numsets)
    Vue.component('laypotpro', laypotpro)
  }
}
