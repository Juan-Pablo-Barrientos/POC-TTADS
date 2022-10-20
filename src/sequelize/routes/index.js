const express = require("express");
const categoryRouter = require("./categoryRouter")

const router = express.Router();

router.use("/category", categoryRouter)

module.exports = router;
