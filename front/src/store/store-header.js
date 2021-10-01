import axios from 'axios'


//sorte de variable globale
const state = {

    listHeader: [],
    Image: []

}





//est à l'écoute d'un changement de state
const getters = {
    getHeader: state => {
        return state.listHeader
    },
    getImage: state => {
        return state.Image
    }

}

//fonction
const actions = {
    // -> post header
    httpHeaderSend({ commit }, payload) {
        console.log('formulaire header: ', payload)
        axios.post("/header", payload)
           .then(res => {
               console.log(res)

            //    this.$router.go('/admin')
               commit('setListHeader', res.data.listHeader)
           })
           .catch(err => console.log(err))
    },
    // -> get header
    httpGetHeader({ commit }) {
        axios.get('/header').then(res => {
            console.log(res)
            commit('setListHeader', res.data.listHeader)
        }).catch((err) => console.log(err))
    },
    // -> inutile
    httpGetImage({ commit }) {
        console.log('bite')
        axios.get('/header')
             .then(res => {
                 commit('setImage',  res.data.listHeader[0].path)
             }).catch(err => console.log(err))
    },
    // -> delete headers
    httpDeleteAllHeaders({ commit }) {
        axios.delete('/header')
            .then(res => {
               commit('setListHeader', res.data.listHeader)
            }).catch(err => console.log(err))
    },
    httpModifyHeader({ commit }, payload) {
        axios.put('/header/:id')
           .then(res => {
               commit('setListHeader', res.data.listHeader)
           }).catch(err => console.log(err))
    }

}

//change le state grace à l'action
const mutations = {

    setListHeader (state, value) {
        state.listHeader = value
    },
    setImage(state, value) {
        state.Image = value
    }

}


export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}