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
      import(/* webpackChunkName: "randomlist" */ '../views/RandomList.vue')
  },
  {
    path: "/user/:id",
    name: "User",
    components: () =>
      import(/* webpackChunkName: "user" */ '../components/User.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
