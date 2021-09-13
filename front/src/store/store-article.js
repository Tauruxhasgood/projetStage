import axios from 'axios'

const state = {
    listArticle: []
    // flash: ''
}

const mutations = {
    setListArticle (state, value) {
        state.listArticle = value
    }
    // setFlash(state, value) {
    //     state.flash = value
    // }
}

const actions = {
    getListArticle ({ commit }) {
        axios.get('/test').then(res => {
            console.log('list article res', res.data)
            commit('setListArticle', res.data.listArticle)
        }).catch((err) => console.log(err))
    }

}

const getters = {
    listArticleGetter: state => {
        return state.listArticle
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}