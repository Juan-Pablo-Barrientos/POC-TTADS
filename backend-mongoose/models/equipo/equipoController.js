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
        let equipos = await equipoModel.find({nombre: nombre});

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

module.exports = router;
