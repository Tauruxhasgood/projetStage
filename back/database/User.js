const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

// const Comment = require('./Comment')
// Création de la collection dans MongoDB
const UserSchema = new Schema({
    name: {
        type: String,
        default: 'Bernard'
    },
    // comment: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Comment'
    // }],
    email: {
        type: String
    },
    password: {
        type: String
    },
    bio: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isBan: {
        type: Boolean,
        default: false
    }
})
// Utilisation de Bcrypt pour hash le MDP
UserSchema.pre('save', function (next) {
    const user = this
    bcrypt.hash(user.password, 10, (error, encrypted) => {
        user.password = encrypted
        next()
    })
})

module.exports = mongoose.model('User', UserSchema)
