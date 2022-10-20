const express = require("express");
const router = express.Router();
const categoryCotroller = require("../controllers/categoryController");

router.get("/", categoryCotroller.getAllCategories);

module.exports = router;