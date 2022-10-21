const {DataTypes } = require('sequelize');
const sequelize = require("../configs/index");
const Equipment = sequelize.define("equipment", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name:{
        type :DataTypes.STRING
      },
      firstProperty:{
        type :DataTypes.STRING
      },
      secondProperty:{
        type :DataTypes.STRING
      },
      thirdProperty:{
        type :DataTypes.STRING
      },
      fourthProperty:{
        type :DataTypes.STRING
      },
      fifthProperty:{
        type :DataTypes.STRING
      }
   },
   {freezeTableName: true,timestamps: false}
   );
    module.exports= Equipment;
  