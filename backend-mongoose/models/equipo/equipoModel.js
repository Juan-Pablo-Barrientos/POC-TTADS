const mongoose = require('mongoose');

const equipoSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    type:{
        type: String,
        require: true
    },
    value: {
        type: Number,
        require: true
    },
    destreza: {
        type: Number,
        require: false
    },
    fuerza: {
        type: Number,
        require: false
    },
    inteligencia: {
        type: Number,
        require: false
    },
    vitalidad: {
        type: Number,
        require: false
    },
    suerte: {
        type: Number,
        require: false
    },
    maldicion: {
        type: String,
        require: false
    },
    vida: {
        type: Number,
        require: false
    }
})

module.exports = mongoose.model('equipos', equipoSchema);