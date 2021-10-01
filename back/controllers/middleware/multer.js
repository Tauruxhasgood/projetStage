// -> IMPORT MODULES
      const multer = require('multer')
      const { v4: uuidv4 } = require('uuid')

      const DIR = '/home/arinfo/Desktop/projetStage/back/public/images'
      const storage = multer.diskStorage({
          destination: (req, file, cb) => {
              cb(null, DIR)
          },
          filename: (req, file, cb) => {
              const fileName = file.originalname.toLowerCase().split(' ').join('-')
              cb(null, uuidv4() + '-' + fileName)
          }
      })


      const upload = multer({
          storage: storage,

          limits: {
              fileSize: 1 * 1920 * 1080,
              files: 1
          },

          fileFilter: (req, file, cb) => {
              if (
                  file.mimetype === "image/png" ||
                  file.mimetype === "image/jpg" ||
                  file.mimetype === "image/jpeg"||
                  file.mimetype === "image/gif"
              ) {
                  cb(null, true)
              } else {
                  cb(null, true)
                  cb(new Error('le fichier doit être au format autorisé (png,jpg,jpeg,gif)'))
              }
          }
      })

      module.exports = upload