const mongoose = require('mongoose');
//require('dotenv').config();

const dbConnection = mongoose
    .connect('mongodb://localhost:27017/armas_y_armaduras?retryWrites=true&w=majority')
    .then( () => console.log("Conexión a MongoDB establecida") )
    .catch( () => console.error(error) )

module.exports = dbConnection;
