const {DataTypes } = require('sequelize');
const sequelize = require("../configs/index");

const Category = sequelize.define("category", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    property:  {
      type: DataTypes.STRING
  },
    value: {
      type: DataTypes.INTEGER
  },
    description:  {
      type: DataTypes.STRING
  }
   },
   {freezeTableName: true,timestamps: false}
   )
    module.exports= Category;
  