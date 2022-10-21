const express = require("express");
const cors = require("cors");
const http = require("http");
const app = express();
const router = require("./src/sequelize/routes/index");
require ("dotenv").config();
const Associations = require('../POC-TTADS/src/sequelize/models/relations')();

app.use(express.json());
app.use(cors());
app.use(router);

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
