import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: async () => await import('@/views/Home/Home.vue')
  },
  {
    path:'/tasks',
    name:'Tasks',
    component: async () => await import('@/views/Tasks/Tasks.vue')
  },
  {
    path:'/map',
    name:'Map',
    component: async () => await import('@/views/Map/Map.vue')
  },
  {
    path:'/user',
    name:'User',
    component: async () => await import('@/views/User/User.vue')
  },
  {
    path:'/calendar',
    name:'Calendar',
    component: async () => await import('@/views/Calendar/Calendar.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
