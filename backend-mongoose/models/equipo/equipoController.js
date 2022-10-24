const express = require('express');
const equipoModel = require ('./equipoModel');

const { Response } = require('../../response.js');


const createError = require('http-errors');

const router = express.Router();

//getAll
router.get('/', async(req, res) => {
    try {
        let equipos = await equipoModel.find()
        Response.success(res, 200, 'Listado de equipos', equipos);
    } catch (error) {
        console.log(error)
    }
});

/*
//create
router.post('/', async(req, res) => {
    try {
        const { body } = req;
        if (!body || Object.keys(body).length == 0){
            Response.error(res, new createError.BadRequest());
        }
        else{
            const equipo = equipoModel(req.body);
            await equipo.save();
            Response.success(res,201,'equipo agregado correctamente',equipo);
        }
    } catch (error) {
        Response.error(res);
    }
});
*/
let equipments = [
    {
     "name":"alta espada",
     "category":"espada",
     "type":"daño",
     "value":7,
     "destreza": 3,
     "fuerza": 4,
     "inteligencia": 25
     },
    {
     "name":"alto escudo",
     "category":"escudo",
     "type":"defensa",
     "value":5,
     "fuerza": 10,
     "inteligencia": 5,
     "vitalidad":15,
    },
    {
     "name":"escudo roto",
     "category": "escudo",
     "type":"defensa",
     "value":2,
     "vitalidad":5
     },
    {
     "name": "casco de cuero",
     "category":"casco",
     "type":"defensa",
     "value": 10,
     "vitalidad":5,
     "suerte":4,
     "maldicion": "50% al golpear",
     "vida":25,
     "destreza":2,
     "inteligencia":-10
     },
    {
     "name": "coraza de acero",
     "category":"coraza",
     "type":"defensa",
     "value": 10
     }
 ];
//getById
router.get('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        let equipo = await equipoModel.findById(id);
        if(!equipo){
            Response.error(res,new createError.NotFound());
        }
        else{
            Response.success(res, 200, `equipo: ${id} , identificado`, equipo)
        }
    } catch (error) {
        Response.error(res)
    }
});

//getByNombre
router.get('/equipo_nombre/:nombre', async(req, res) => {
    try {
        const { nombre } = req.params;
        let equipos = await equipoModel.find({name: nombre});

        if(!equipos){
            Response.error(res, new createError.NotFound());
        }
        else{
            Response.success(res, 200, `nombre: ${nombre}`, equipos);
        }
    } catch (error) {
        Response.error(res)
    }
});

router.post('/', async(req, res) => {
    try {
        for(let i = 0; i < 1000; i++) {
            const random = Math.floor(Math.random() * 4);
            await equipoModel.insert(equipments[random])
          }
        Response.success(res,201,'equipo agregado correctamente');
    } catch (error) {
        Response.error(res);
    }
});

/*

//update
router.put('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const { nombre, damage, fecha_obtencion, fe, fe_maldita, inteligencia, resistencia, maldicion, ceguera, quemadura, anti_veneno } = req.body;
        let equipo = await equipoModel.updateOne({_id: id}, {$set: {nombre, damage, fecha_obtencion, fe, fe_maldita, inteligencia, resistencia, maldicion, ceguera, quemadura, anti_veneno}});
    } catch (error) {
        Response.error(error)
    }
});

//delete
router.delete('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        await equipoModel.deleteOne({_id: id});
        Response.success(res, 200, 'equipo eliminado correctamente');
    } catch (error) {
        Response.error(error);
    }
});

*/
module.exports = router;
