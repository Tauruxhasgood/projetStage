const mongoose = require('mongoose')
const Schema = mongoose.Schema


const HeaderSchema = new Schema({
      _id: mongoose.Schema.Types.ObjectId,
      imagesArray: {
          type: Array
      },
      titre: String,
      path: String,
      
})






module.exports = mongoose.model('Header', HeaderSchema)