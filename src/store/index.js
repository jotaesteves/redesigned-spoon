import Vue from 'vue'
import Vuex from 'vuex'
import user from './userModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { user }
})
