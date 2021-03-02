import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '@/views/Homepage.vue'
import NewUser from '@/views/NewUser.vue'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/NewUser',
    name: 'NewUser',
    component: NewUser
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
