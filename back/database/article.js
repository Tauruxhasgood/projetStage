// -> MODÈLE ARTICLE


// -> IMPORT MONGOOSE CONNECTION DB
const mongoose = require('mongoose')

// -> CREATION DU MODÈLE ARTICLE
const ArticleSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: String,
})


// -> EXPORT DU MODÈLE
module.exports = mongoose.model('Article', ArticleSchema)