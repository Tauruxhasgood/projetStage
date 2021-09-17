import axios from 'axios'

const state = {
    // on déclare notre state listArticle comme objet vide
    listArticle: [],
    flash: ''
}

const mutations = {
    // on demande que la mutation modifie le state ou on a déclarer le listArticle
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
                // this.$router.go('/')
                commit('setFlash', res.data.message)
                // on commit les changements du state
                commit('setListArticle', res.data.listArticle)
            })
            .catch(err => console.log(err))
    },

    editOneArticle({ commit }, payload) {
        console.log('formulaire update article :', payload);
        axios.put('/article/' + payload.id, {
            title: payload.title,
            description: payload.description,
            content: payload.content
        }).then(res => {
            commit('setListArticle', res.data.listArticle)
        })
        .catch(err => console.log(err))
    },

    deleteOneArticle ({commit}, payload) {
        axios.delete(`/article/${payload}`).then(res => {
            commit('setListArticle', res.data.listArticle)
        }).catch((err) => console.log(err))
    },

    deleteAllArticle ({commit}, payload) {
        axios.delete('/article', payload)
            .then(res => {
                commit('setListArticle', res.data.listArticle)
            }).catch((err) => console.log(err))
    }
}

const getters = {
    // le getters reste à l'écoute de la modification du state
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