const mongoose = require('mongoose');

const equipoSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    fecha_obtencion: {
        type: Date,
        require: true
    },
    damage:{
        type: Number,
        require: false
    },
    fe: {
        type: Number,
        require: false
    },
    fe_maldita: {
        type: Number,
        require: false
    },
    inteligencia: {
        type: Number,
        require: false
    },
    resistencia: {
        type: Number,
        require: false
    },
    maldicion: {
        type: String,
        require: false
    },
    ceguera: {
        type: String,
        require: false
    },
    quemadura: {
        type: String,
        require: false
    },
    anti_veneno: {
        type: String,
        require: false
    }
})

module.exports = mongoose.model('equipos', equipoSchema);