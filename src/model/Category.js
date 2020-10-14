const mongoose = require('mongoose');
const { Schema, ObjectId } = require('mongoose');

const Category = new Schema({
    id: ObjectId,
    name: String,
    domain: String,
    data: []
});

module.exports = mongoose.model('Category', Category);

