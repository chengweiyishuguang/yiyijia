import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Component from './components'// 全局注册组件
import './rem'
// 动态设置REM基准值（html标签字体大小）
import 'amfe-flexible'
// reset  css文件
import 'normalize.css'
import './styles/reset.less'
// 全局样式
import './styles/index.less'
Vue.use(Component)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
