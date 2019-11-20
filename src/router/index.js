import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home'
import Login from '@/views/login'
Vue.use(VueRouter)

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'login', path: '/login', component: Login }
]

const router = new VueRouter({
  routes
})

export default router
