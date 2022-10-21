const express = require("express");
const router = express.Router();
const equipmentCotroller = require("../controllers/equipmentController");

router.get("/", equipmentCotroller.getAllEquipments);
router.post("/", equipmentCotroller.addEquipment);

module.exports = router;