//router

const express = require('express'),
      router = express.Router(),
      adminController = require('./controllers/AdminController'),
      AuthController = require('./controllers/AuthController'),
      ContactController = require ('./controllers/ContactController')

const upload = require('./middleware/multer')

router.route('/test')
     .get(adminController.getArticle)
     .post(adminController.addArticle)
     .delete(adminController.delAllArticle)

router.route('/test/:id')
    .put(adminController.modifyArticleById)
    .delete(adminController.delArticleById)


// Créeation route login et register
router.route('/login')
     .post(AuthController.login)

router.route('/register')
     .post(AuthController.register)


router.route('/contact')
     .post(ContactController.sendContact)
     .get(ContactController.getContact)

router.route('/header')
     .post(upload.array('imagesArray'),adminController.newHeader)
     .get(adminController.getHeader)
     .delete(adminController.deleteAllHeaders)

router.route('/header/:id')
     .put(adminController.modifyHeaderById)
     .delete(adminController.delArticleById)

module.exports = router;