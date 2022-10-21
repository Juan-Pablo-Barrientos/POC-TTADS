const {DataTypes } = require('sequelize');
const sequelize = require("../configs/index");
const Npc = sequelize.define("npc", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
    name:{
        type:DataTypes.STRING
    },
    locationX:{
        type:DataTypes.INTEGER
    },
    locationY:{
        type:DataTypes.INTEGER
    }     
   },
   {freezeTableName: true,timestamps: false}
   );
    module.exports= Npc;
  