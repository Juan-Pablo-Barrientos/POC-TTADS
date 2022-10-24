const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const http = require("http");
const db = require('./backend-mongoose/models/db.js');
const app = express();
const router = require("./src/sequelize/routes/index");
require ("dotenv").config();
const Associations = require('./src/sequelize/models/relations')();
const equipo = require('./backend-mongoose/models/equipo/equipoController.js')
app.use(express.json());
app.use(cors());
app.use(router);
app.use('/api/equipo', equipo);
const server = http.createServer(app);

const port = process.env.PORT || 3000;

server.listen(port, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Server running on port ${port}`);
});

module.exports = app;
