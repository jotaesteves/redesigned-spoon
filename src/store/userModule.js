import * as types from './mutationTypes'

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
    [types.SET_USERS](state, response) {
        state.users = response.data.data
        state.pagination.page = response.data.page
        state.pagination.per_page = response.data.per_page
        state.pagination.total_pages = response.data.total_pages
    },
}

const getters = {
    getUsers: state => state.users,
    getTotalPages: state => state.pagination.total_pages,

}

const actions = {
    setUser(store, data) {
        store.commit(types.SET_USER, data)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}