// -> CONTROLLEUR CONTACT

// -> IMPORT DU MODELE MESSAGE
const Message = require('../../database/Message')

// -> FONCTION ENVOI DE MESSAGE 
exports.sendContact = async  (req, res) => {
    console.log('controller contact: ', req.body)

    if (!req.body.nom || ! req.body.email || !req.body.sujet || !req.body.message) {

        res.json({
            message: 'une erreur est survenue, un champ est manquant'
        })

    } else  {

     await Message.create({...req.body})
        
     res.json({
               message: 'message transmis',
               listMessage: await Message.find({})
            })
    }
}

exports.getContact = async (req, res) => {
    console.log('Controller get Message: ')
    await  Message.find({}).then(data => {
         res.json({
             status: 200,
             listMessage: data,
             message: "liste de message récupérée avec succès"
            })
     }).catch(err => console.log(err))

}