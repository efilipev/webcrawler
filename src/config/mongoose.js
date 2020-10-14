const mongoose = require('mongoose');

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

exports.connect = () => {
    mongoose.connect('mongodb://localhost:27017/webCrawler-development', {
        keepAlive: 1,
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useMongoClient: true,
    });
    return mongoose.connection;
};
