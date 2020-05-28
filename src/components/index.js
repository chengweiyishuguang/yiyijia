// 全局注册组件
import layoutheader from './home/layout-header'

export default {
  install (Vue) {
    Vue.component('layoutheader', layoutheader)
  }
}
