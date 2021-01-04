const { kStringMaxLength } = require('buffer');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sneakers = new Schema({
    brand: {
        type: String,
        required: true
    },
    model: String,
    type: String,
    label: String,
    size: Number,
    shop: String,
    retail_price: Number,
    ressel_price: Number,
    sale_date: Date,
    purchase_date: Date
});

module.exports = mongoose.model('sneakers', sneakers);