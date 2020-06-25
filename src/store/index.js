import Vue from 'vue'
import Vuex from 'vuex'
import user from './userModule'
import random from './randomModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { user, random }
})
