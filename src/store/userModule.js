import * as types from './mutationTypes'
import UserService from '../services/userService'
import HttpService from '../services/httpService'
import Vue from 'vue'

const state = {
    users: [],
    user: [],
    pagination: {
        page: 0,
        per_page: 0,
        total_pages: 0
    }

}

const mutations = {
    [types.SET_USERS](state, data) {
        state.users = data.data
        state.pagination.page = data.page
        state.pagination.per_page = data.per_page
        state.pagination.total_pages = data.total_pages
    },
    [types.SET_PAGE](state, page) {
        state.pagination.page = page
    }
}

const getters = {
    users: state => state.users,
    total_pages: state => state.pagination.total_pages,
    page: state => state.pagination.page,
    per_page: state => state.pagination.per_page,

}

const actions = {
    getUsers (store) {
        UserService.getUsers({ page: store.state.pagination.page })
            .then((response) => {
                store.commit(types.SET_USERS, response.data)
            })
            .catch((err) => {
                HttpService.handleHttpError(Vue, err)
            })
    },

    setPage ({commit, dispatch}, page) {
        commit(types.SET_PAGE, page)
        dispatch('getUsers')
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}