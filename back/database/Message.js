// -> MODÈLE MESSAGE

// -> IMPORT MONGOOSE CO À LA DB
const mongoose = require('mongoose')

// -> IMPORT SCHEMA MONGOOSE
const Schema = mongoose.Schema

// -> DEFINITION DES CHAMPS DU MODELE
const MessageSchema = new Schema({
    nom: {
        type: String
        
    },
    email: {
        type: String
    },
    sujet: {
        type: String
    },
    message: {
        type: String
    }
})


// -> EXPORT DU MODÈLE
module.exports = mongoose.model('Message', MessageSchema)