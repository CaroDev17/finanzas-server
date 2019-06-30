var mongoose = require('mongoose');

var registerModel = mongoose.Schema({
    id: Number,
    name: String,
    lastName: String,
    email: String,
    password: String,
    date: Date,
    category: String,
    income: Number,
    spends: Number

});

module.exports = mongoose.model('usuarios', registerModel);