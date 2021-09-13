const bcrypt = require('bcrypt')

const User = require('../../database/User')

exports.login = async (req, res) => {
    console.log('controller login', req.body)
    const Exist = User.findOne({
        email: req.body.email
    })

    if (!Exist) {
        console.log('non')
    } else if (Exist) {

        let email = req.body.email
        let password = req.body.password
   
        User.findOne({
            email

        }, (error, User) => {
            if (error) console.log(error)

            if (!User) {
                console.log('pasuser')
                res.json({
                    message: 'pas user'
                })
            } else {
                bcrypt.compare(password, User.password, (error, result) => {
                    if (error) {
                        console.log('error')
                    } else {
                        if (!result) {
                            console.log('mot de pass pas bon')
                            res.json('MDP PAS BON')
                        } else if (result) {
                            console.log('mdp OK')
                            res.json({
                                message: 'Vous êtes connecté'
                               
                            })
                        }
                    }
                })
            }
        })
    }
}

// Controller REGISTER
exports.register = (req, res) => {
    console.log('controller register', req.body)
    // Si l'un des input est vide un message apparait pour informer l'utilisateur (c'est le )
    if (!req.body.name || !req.body.email || !req.body.password || !req.body.passwordConfirm) {
        res.json({
            message: 'Une erreur est survenu !'
        })
    } else {
        // Sinon création de l'utilisateur avec req.body pour reprendre les informations du formulaire
        User.create({
            ...req.body
        }, (err, user) => {
            if (err) throw err
            const userClient = {
                name: user.name,
                email: user.email
            }
            // Message indiquant à l'utilisateur que son compte a été crée
            res.json({
                message: 'Votre compte à été creer avec succès ! ' + `Welcome ${ user.name }`,
                user: userClient
            })
        })
    }
}