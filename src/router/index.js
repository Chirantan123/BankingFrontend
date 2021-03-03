import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/home.vue'
import register from '@/views/register.vue'
import login from '@/views/login.vue'
import welcome from '@/views/welcome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/home',
    component: home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: welcome
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
