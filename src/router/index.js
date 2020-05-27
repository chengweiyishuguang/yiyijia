import Vue from 'vue'
import VueRouter from 'vue-router'
// import homepage from '../views/homepage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/homepage',
    name: 'homepage',
    component: () => import('@/views/homepage')
  }

]

const router = new VueRouter({
  routes
})

export default router
