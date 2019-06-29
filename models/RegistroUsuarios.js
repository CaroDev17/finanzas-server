var mongoose = require('mongoose');

var modelsRegistro = mongoose.Schema({
    id: Number,
    nombre: String,
    apellido: String,
    edad: Number,
    mail: String,
    pass: String


});

module.exports = mongoose.model('usuarios', modelsRegistro);