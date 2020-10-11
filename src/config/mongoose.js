const mongoose = require('mongoose');
const dbConfig = require('../config/settings.json');

const ENV = process.env.NODE_ENV;
console.log('env --', ENV);

mongoose.Promise = Promise;
mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(-1);
});

if (ENV === 'development') {
    mongoose.set('debug', true);
}

exports.connect = function () {
    mongoose.connect('mongodb://127.0.0.1:27017/webCrawler-development', {
        keepAlive: 1,
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useMongoClient: true,
    });
    return mongoose.connection;
};
