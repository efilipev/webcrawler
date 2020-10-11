const { Schema, ObjectId } = require('mongoose');

const Item = new Schema({
    id: ObjectId,
    title: String,
    price: Number,
    photoUrl: String,
    description: String
});

module.exports = {
    Item
};
