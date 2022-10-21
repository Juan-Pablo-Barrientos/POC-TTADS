const express = require("express");
const router = express.Router();
const mapController = require("../controllers/mapController");

router.get("/", mapController.getAllMaps);

module.exports = router;