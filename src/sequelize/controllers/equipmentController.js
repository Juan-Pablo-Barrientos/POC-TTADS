const models = require("../models/index");
const equipment= [{
  name:"alta espada",
  categoryId:1,
  firstProperty: "20+ vida",
  secondProperty: "20+ ataque",
  thirdProperty: "3+ destreza",
  fourthProperty: "4+fuerza",
  fifthProperty: "25+inteligencia"
  },
 {
  name:"alto escudo",
  categoryId:2,
  firstProperty: "20+mana",
  secondProperty: "20+ ataque",
  thirdProperty: "3+ destreza"
 },
 {
  name:"escudo roto",
  categoryId:2,
  firstProperty: "20+ vida",
  secondProperty: "20+ ataque",
  thirdProperty: "3+ destreza",
  fourthProperty: "4+fuerza",
  },
 {
  name: "casco de cuero",
  categoryId:4,
  firstProperty: "20+ vida"
  },
 {
  name: "coraza de acero",
  categoryId:5,
  firstProperty: "20+ vida",
  secondProperty: "20+ ataque",
  thirdProperty: "3+ destreza",
  fourthProperty: "4+fuerza"
 }];

const getAllEquipments = async (req,res) => {
    try {
      const response = await models.Equipment.findAll({ include: { all: true}});
      return res.status(200).json({ data: response, error: false });
    } catch (error) {
      return res.status(500).json({ msg: error, error: true });
    }
  };

const addEquipment = async (req,res) => {
    try {
      for (let index = 0; index < 1000; index++) {
      const random = Math.floor(Math.random() * 4);
      const response = await models.Equipment.create(equipment[random]);
    }
      return res.status(201).json({msg:"equipo agregado correctamente", error: false });
    } catch (error) {
      return res.status(500).json({ msg: error, error: true });
    }
  };

module.exports={getAllEquipments,addEquipment}