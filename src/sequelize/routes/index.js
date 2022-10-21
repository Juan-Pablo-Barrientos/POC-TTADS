const express = require("express");
const categoryRouter = require("./categoryRouter");
const equipmentRouter = require("./equipmentRouter");
const mapRouter = require("./mapRouter");
const npcRouter = require("./npcRouter");
const questRouter = require("./questRouter");

const router = express.Router();

router.use("/category", categoryRouter)
router.use("/equipment", equipmentRouter)
router.use("/map", mapRouter)
router.use("/npc", npcRouter)
router.use("/quest", questRouter)

module.exports = router;
