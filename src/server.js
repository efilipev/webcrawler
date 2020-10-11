const helmet = require('helmet');
const express = require('express');
const mongoose = require('mongoose');
const { ItemsController,  } = require('../src/controllers');
const server = express();

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
mongoose.connect('mongodb://127.0.0.1:27017/webCrawler-development', {
    keepAlive: 1,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useMongoClient: true,
});

server.use(helmet());
server.use(express.static('../dist/alpha/'));
server.use( ItemsController );
server.listen(process.env.port || 8080);

module.exports = server;
