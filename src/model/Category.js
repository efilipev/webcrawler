const { Schema, ObjectId } = require('mongoose');

const Category = new Schema({
    id: ObjectId,
    name: String,
    domain: String,
    data: Array
});

module.exports = {
    Category
};
