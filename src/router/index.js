import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      name: 'tabBar',
      path: '/',
      component: () => import('@/views/tabBar/index.vue'),
      children: [
        {name: 'home', path: '/', component: () => import('@/views/main/home.vue')}
      ]
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/login/index.vue')
    }
  ]
})
