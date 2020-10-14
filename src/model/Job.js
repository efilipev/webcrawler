const mongoose = require('mongoose');
const { Schema, ObjectId } = require('mongoose');

const Job = new Schema({
    id: ObjectId,
    name: String,
    time: Date,
    statistic: {
        url: String,
        category: String,
        itemsFetchedLength: Number
    }
});

module.exports = mongoose.model('Job', Job);

