var mongoose = require('mongoose');

var modelImport = mongoose.Schema({
    fecha: Date,
    clasification: String,
    incomen: Number,
    outcome: Number,
    summary: Number

});

module.exports = mongoose.model('Importes', modelImport);