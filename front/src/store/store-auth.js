// AXIOS qui intéragit avec l'API

import axios from 'axios'


const state = {
    // Déclaration de notre state flash qui indiquera une erreur ou un succès lors de l'inscription
    flash: ''
}
const mutations = {
    // La mutation prends le paramètre du state = ce que nous avons inscrit dans le state ci-dessus, la value prends la valeur du commit déclaré dans l'action register
    setFlash(state, value) {
        state.flash = value
    }
}

const actions = {
    httpFormLogin({ commit }, payload) {
        console.log('formulaire login:', payload);
        axios.post("/login", payload)
            .then(res => {
                console.log(res);
                
                this.$router.go('/')
                console.log(res)
                commit('setflash', res.data.message)
            })
            .catch(err => console.log(err))
    },
    // Ne pas oublier de déclarer le commit dans les paramètres de la fonction httpFormRegister
    httpFormRegister({ commit }, payload) {
        console.log('formulaire register:', payload);
        axios.post("/register", payload)
            .then(res => {
                console.log(res)
                this.$router.go('/')
                // on commit setFlash avec une response qui correspond au data envoyées + le message déclaré dans le controller "AuthController"
                commit('setFlash', res.data.message)
            })
            .catch(err => console.log(err))
    },

    httpFormPassword({ }, payload) {
        axios.post("/lostPassord", {
            email: payload.mail
        })
            .then(res => console.log(res.data.result))
            .catch(err => console.log(err))
    }
}
// on déclare notre getters qui est à l'écoute du state
const getters = {
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