import axios from 'axios'

const state = {
    listArticle: [],
    flash: ''
}

const mutations = {
    setListArticle (state, value) {
        state.listArticle = value
    },
    setFlash(state, value) {
        state.flash = value
    }
}

const actions = {
    getListArticle ({ commit }) {
        axios.get('/article').then(res => {
            console.log('list article res', res.data)
            commit('setListArticle', res.data.listArticle)
        }).catch((err) => console.log(err))
    },

    httpFormAddArticle({ commit }, payload) {
        console.log('formulaire add article :', payload);
        axios.post("/article", payload)
            .then(res => {
                console.log(res);
                this.$router.go('/')
                commit('setFlash', res.data.message)
            })
            .catch(err => console.log(err))
    }

}

const getters = {
    listArticleGetter: state => {
        return state.listArticle
    },
    flashGetter: state => {
        return state.flash
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}