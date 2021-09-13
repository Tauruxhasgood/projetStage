// Ici on crée notre connexion à la base de données

// Import module
const mongoose = require('mongoose')

//  on déclare notre constante qui reprends les données de connexion du .env
const urlDb = process.env.DB_URL

// When successfully connected
mongoose.connection.on('connected', () => {
    console.log('mongodb: connection success');
});
  
// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
    console.log('mongodb: connection disconnected');
});

// Connect
console.log('mongodb: connecting...');
mongoose
    .connect(urlDb, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })  
    .catch(err => console.log(err));

