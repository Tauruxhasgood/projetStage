// CONTROLLER ADMIN 

// -> IMPORT MODULES


// -> IMPORT MODELE
let mongoose = require('mongoose')
const Article = require('../../database/article')
const Headerse = require('../../database/header')


// ====> CRUD ARTICLES <==== //

// -> FONCTION GET ARTICLE
exports.getArticle = async (req, res) => {
    console.log('dfsghdfsh');
    Article.find()
        .then(data => {
            console.log(data)
            res.json({
                status: 200,
                listArticle: data
            })
        }).catch(err => console.log(err))

}

// -> FONCTION ADD ARTICLE
exports.addArticle = async (req, res) => {
    const dbArticle = await Article.find({})
    console.log('Adm Ctrlr ADD.art ', dbArticle)
    Article.create({
            ...req.body
        },
        res.json('Article Created:'))

}

// -> FONCTION MODIFY ARTICLE
exports.modifyArticleById = async (req, res) => {
    const dbArticle = await Article.find({})
    console.log('Adm Ctrlr MOD.art(id)')
    Article.findByIdAndUpdate(req.params.id, {
        ...req.body
    }, (err, data) => {
        if (err) console.log(err)
        res.json('Article Modified: ')
    })
}

// -> FONCTION DELETE ARTICLE BY ID
exports.delArticleById = async (req, res) => {
    const dbArticle = await Article.find({})
    console.log('Adm Ctrlr DEL.art(id): ', dbArticle)
    Article.findByIdAndDelete(req.params.id, {

    }, (err, data) => {
        if (err) console.log(err)
        res.json('Article Deleted :')

    })
}

// -> FONCTION DELETE ALL ARTICLES
exports.delAllArticle = async (req, res) => {
    const dbArticle = await Article.find({})
    console.log('Adm Ctrlr DEL.ALL.art : ', dbArticle)
    Article.deleteMany((err) => {
        if (!err) {
            res.json('Articles Deleted :')
        } else {
            res.json('Articles Not Deleted:')
        }
    })
}

// ====> FIN DU CRUD ARTICLES   <==== //
//ESPACE ESPACE ESPACE ESPACE
//ESPACE ESPACE ESPACE ESPACE
// ESPACE ESPACE ESPACE ESPACE
// ====> GESTION DES HEADERS <==== //

// -> FONCTION ADD HEADER 
exports.newHeader = async (req, res) => {
    console.log('reqfiles:')
  
    if (!req) {
            res.status(502).json({ message: 'bite'})
    } else {
        const reqFiles = []
    
        const url = req.protocol + '://' + req.get('host')
        console.log('reqfiles:',reqFiles)
        reqFiles.push(url + req.files.filename)
        let path = 'http://localhost:2000/assets/images/' + req.files[0].filename


        await Headerse.create({
            ...req.body,
            _id: new mongoose.Types.ObjectId(),
            path,
            titre: 'bite'
        })
        console.log('bitebitebite')
        res.status(200).json({
            message: 'uploadé',
            listHeader: await Headerse.find({}),
            imagesArray: reqFiles,
            userCreated: {
                imagesArray: res.imagesArray
            }
            
        })
    }
  
}

// -> FONCTION GET HEADER
exports.getHeader = async (req, res) => {

    console.log('get HEADERS')
    await Headerse.find({}).then(data => {
        res.json({
            status: 200,
            listHeader: data
        })
    }).catch(err => console.log(err))

}

// -> FONCTION DELETE ALL HEADERS
exports.deleteAllHeaders =  (req, res) => {
    console.log('delete all headers')
     Headerse.deleteMany((err) => {
        if(!err) {
            res.json('delete complete')
        } else {
            res.json('delete non complete')
        }
    })
}

// -> FONCTION MODIFY HEADER BY ID
exports.modifyHeaderById = async (req, res) => {

    const dbHeader = await Headerse.find({})
    console.log('Adm Ctrlr MOD.Header(id)')
    Headerse.findByIdAndUpdate(req.params.id, {
        ...req.body
    }, (err, data) => {
        if (err) console.log(err)
        res.json('Header Modified: ')
    })

}

// -> FONCTION DELETE HEADER BY ID 
exports.deleteHeaderById = async (req, res) => {
    const dbHeader = await Article.find({})
    console.log('Adm Ctrlr DEL.header(id): ', dbHeader)
    Article.findByIdAndDelete(req.params.id, {

    }, (err, data) => {
        if (err) console.log(err)
        res.json('Header Deleted :')

    })
}

// ====> FIN DE GESTION DES HEADERS <==== //