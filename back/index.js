//IMPORT MODULES 


require('dotenv').config()


const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      methodOverride = require('method-override'),
      port = process.env.PORT

app.use(methodOverride('_method'))

app.use('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

// Pour notre db on appel notre le fichier "db.js" (cela secur les données de la db)
require('./database/db')

app.use(cors({
    origin: ['http://localhost:8080'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))
  
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))


const ROUTER = require('./controllers/router')

app.use('/', ROUTER)


app.listen(port, () => {
    console.log('API lancée sur le port: ' + port)
})