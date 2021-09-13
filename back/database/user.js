// -> MODÈLE UTILISATEUR

// -> IMPORT MONGOOSE CONNECTION DB
const mongoose = require('mongoose')

// -> CREATION MODELE UTILISATEUR
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})


// -> EXPORT DU MODÈLE
module.exports = mongoose.model('User', UserSchema)