const {DataTypes } = require('sequelize');
const sequelize = require("../configs/index");
const Category = require("./category");
const Equipment = require("./equipment");
const Map = require("./map");
const Quest = require("./quest");
const Npc = require ("./npc")

const setAssociations = function() {
    Category.hasMany(Equipment);
    Equipment.belongsTo(Category);

    Map.hasMany(Npc);
    Map.hasMany(Quest);

    Npc.belongsTo(Map);
    Quest.belongsTo(Map);

    Npc.hasOne(Quest,{
        foreignKey: {
          name: 'npcQuestGiverId'
        }
    });

    Quest.belongsTo(Npc,{
        foreignKey: {
          name: 'npcQuestGiverId'
        }
    }) 
 }

 module.exports = setAssociations;