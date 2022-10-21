const {DataTypes } = require('sequelize');
const sequelize = require("../configs/index");
const Map = sequelize.define("map", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
    description:{
        type:DataTypes.STRING
    },
    name:{
        type:DataTypes.STRING
    },
    sizeX:{
        type:DataTypes.INTEGER
    },
    sizeY:{
        type:DataTypes.INTEGER
    }     
   },
   {freezeTableName: true,timestamps: false}
   );
    module.exports= Map;
  