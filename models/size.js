const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Size = new Schema({
    us: Number,
    eu: Number,
    uk: Number
})

module.exports = mongoose.model('Size', Size);