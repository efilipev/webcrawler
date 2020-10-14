const mongoose = require('mongoose');
const { Schema, ObjectId } = require('mongoose');

const Item = new Schema({
    id: ObjectId,
    brand: String,
    model: String,
    currentPrice: String,
    imageUrl: String
});

module.exports = mongoose.model('Item', Item);
