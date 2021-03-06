import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/counter',
    name: 'Counter',
    component: () => import(/* webpackChunkName: "about" */ '../views/Counter.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
