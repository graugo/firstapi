const mongoose = require('mongoose');

const filmSchema = mongoose.Schema({
    name: String,
    director: String,
});

module.exports = mongoose.model('Film', filmSchema);