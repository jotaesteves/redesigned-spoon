import * as types from './mutationTypes'
import UnknowService from '../services/unknowService'
import HttpService from '../services/httpService'
import Vue from 'vue'

const state = {
    random_list: [],
    random_item: [],
    pagination: {
        page: 0,
        per_page: 0,
        total_pages: 0
    }

}

const mutations = {
    [types.SET_RANDOM_LIST](state, data) {
        state.random_list = data.data
        state.pagination.page = data.page
        state.pagination.per_page = data.per_page
        state.pagination.total_pages = data.total_pages
    },
    [types.SET_PAGE](state, page) {
        state.pagination.page = page
    }
}

const getters = {
    random_list: state => state.random_list,
    total_pages: state => state.pagination.total_pages,
    page: state => state.pagination.page,
    per_page: state => state.pagination.per_page,

}

const actions = {
    getRandomList (store) {
        UnknowService.getRandomList({ page: store.state.pagination.page })
            .then((response) => {
                store.commit(types.SET_RANDOM_LIST, response.data)
            })
            .catch((err) => {
                HttpService.handleHttpError(Vue, err)
            })
    },

    setPage ({commit, dispatch}, page) {
        commit(types.SET_PAGE, page)
        dispatch('getRandomList')
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}