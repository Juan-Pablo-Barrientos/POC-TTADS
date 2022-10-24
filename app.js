//para la parte de backend de mongoose
const express = require('express');
const mongoose = require('mongoose');

const equipo = require('./backend-mongoose/models/equipo/equipoController.js')
const db = require('./backend-mongoose/models/db.js');
const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/equipo', equipo);

app.listen(port, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", port);
});
