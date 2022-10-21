const {DataTypes } = require('sequelize');
const sequelize = require("../configs/index");
const Quest = sequelize.define("quest", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
    name:{
        type:DataTypes.STRING
    },
    description:{
        type:DataTypes.STRING
    }
   },
   {freezeTableName: true,timestamps: false}
   );
    module.exports= Quest;
  