// CONTROLLER ADMIN 
// -> IMPORT MODELE
const Article = require('../../database/article')

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