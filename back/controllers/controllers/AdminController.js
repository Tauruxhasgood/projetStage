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
    console.log('info de dbArticle :', req.body)
    
    // si rien n'est inscrit dans req.body message d'erreur qui s'affiche
    if (!req.body) res.status(502).json({ message: 'Une erreur est survenu !' })

    else { 
        await Article.create({ ...req.body })

        res.json({
            // on renvoi un message qui valide la création et pour recharger avec la nouvelle création, on appel la DB
            message: 'Article Créée',
            listArticle: await Article.find({})
        })
    }
}

// -> FONCTION MODIFY ARTICLE
exports.modifyArticleById = async (req, res) => {
    console.log('info reqbody :',req.body);
    // await Article.findByIdAndUpdate(req.params.id, {
    //     ...req.body
    // }, (err, data) => {
    //     if (err) console.log(err)
    //     res.json('Article Modifié')
    // })
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