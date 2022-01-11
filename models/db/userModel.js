const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    mail: String,
    active: Boolean,
});

module.exports = mongoose.model('User', userSchema);