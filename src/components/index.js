// 全局注册组件
import layoutheader from './home/layout-header'
import layoutaudio from './night/layout-audio.vue'

export default {
  install (Vue) {
    Vue.component('layoutheader', layoutheader)
    Vue.component('layoutaudio', layoutaudio)
  }
}
