import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Users',
    component: () =>
    import(/* webpackChunkName: "users" */ '../views/Users.vue')
  },
  {
    path: '/list',
    name: 'RandomList',
    component: () =>
      import(/* webpackChunkName: "random-list" */ '../views/RandomList.vue')
  },
  {
    path: "/user/:id",
    name: "UserPage",
    component: () =>
      import(/* webpackChunkName: "user" */ '../components/UserPage.vue')
  },
  {
    path: "/unknown/:id",
    name: "RandomPage",
    component: () =>
      import(/* webpackChunkName: "user" */ '../components/RandomPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
