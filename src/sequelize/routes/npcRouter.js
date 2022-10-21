const express = require("express");
const router = express.Router();
const npcController = require("../controllers/npcController");

router.get("/", npcController.getAllNpcs);

module.exports = router;