const models = require("../models/index");

const getAllCategories = async (req,res) => {
    try {
      const response = await models.Category.findAll();
      return res.status(200).json({ data: response, error: false });
    } catch (error) {
      return res.status(500).json({ msg: error, error: true });
    }
  };

module.exports={getAllCategories}