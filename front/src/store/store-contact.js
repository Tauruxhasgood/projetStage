// -> IMPORT D'AXIOS REQUETE HTTP
import axios from 'axios'

// -> STATES
const state =  {
     
       flash: '',
       listMessage: []

}


// -> GETTERS
const getters = {
    flashGetter: state => {
        return state.flash
    },
    getListMessage: state => {
        return state.listMessage
    }
}



// --> ACTIONS
const actions = {
    httpMessageContact({ commit }, payload) {
    console.log('formulaire login:', payload);
    axios.post("/contact", payload)
       .then(res => {
           console.log(res)

           commit('setFlash', res.data.message)
           commit('setListMessage', res.data.listMessage)
        })
       .catch(err => console.log(err))
    },
    httpGetListMessage ({ commit }) {
        axios.get('/contact').then(res => {
            commit('setListMessage', res.data.listMessage)
        }).catch((err) => console.log(err))
    }

}

// --> MUTATIONS
const mutations = {
    setFlash(state, value) {
        state.flash = value
    },
    setListMessage (state, value) {
        state.listMessage = value
    }
}



// --> EXPORTS 
export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
    
}