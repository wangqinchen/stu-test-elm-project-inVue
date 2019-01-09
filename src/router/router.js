import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '',
      component: () => import('components/goods/goods.vue')
    },
    {
      path: '/goods',
      name: 'goods',
      component: () => import('components/goods/goods.vue')
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: () => import('components/ratings/ratings.vue')
    },
    {
      path: '/seller',
      name: 'seller',
      component: () => import('components/seller/seller.vue')
    }
  ]
})
