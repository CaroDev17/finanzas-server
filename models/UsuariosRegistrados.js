var mongoose = require('mongoose');

var modelUsuarios = mongoose.Schema({
    mail: String,
    pass: String

});

module.exports = mongoose.model('usuarios', modelUsuarios);