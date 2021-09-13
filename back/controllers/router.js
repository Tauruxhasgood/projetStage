//router

const express = require('express'),
      router = express.Router(),
      adminController = require('./controllers/AdminController'),
      AuthController = require('./controllers/AuthController'),
      ContactController = require ('./controllers/ContactController')

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

module.exports = router;