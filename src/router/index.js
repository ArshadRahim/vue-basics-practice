import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user',
    name : 'User',
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')

  },
  
  {
    path: '/form',
    name : 'Form',
    component: () => import(/* webpackChunkName: "about" */ '../views/Form.vue')

  },
  {
    path: '/newPractice',
    name : 'newPractice',
    component: () => import(/* webpackChunkName: "about" */ '../views/newPractice.vue')

  },
  {
    path: '/hello',
    name : 'hello',
    component: () => import(/* webpackChunkName: "about" */ '../views/hello.vue')

  },
  {
    path: '/computed',
    name : 'computed',
    component: () => import(/* webpackChunkName: "about" */ '../views/computed.vue')

  },

  {
    path: '*',
    name : " PageNotFound",
    component: () => import(/* webpackChunkName: "about" */ '../views/pageNotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
