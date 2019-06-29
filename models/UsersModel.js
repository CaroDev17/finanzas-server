var mongoose = require('mongoose');

var modelsRegistro = mongoose.Schema({
    id: Number,
    name: String,
    lastName: String,
    mail: String,
    pass: String,
    date: Date,
    category: String,
    income: Number,
    spends: Number

});

module.exports = mongoose.model('usuarios', modelsRegistro);