const helmet = require('helmet');
const express = require('express');
const { ItemsController,  } = require('../src/controllers');
const server = express();
const { job } = require('./crons');
const { mongoose } = require('./config');

mongoose.connect();
server.use(helmet());
server.use( ItemsController );
job.start();
server.listen(process.env.port || 8080);

module.exports = server;
