var express = require('express');
var app = express();

var http = require('http').Server(app);
var path = require('path');

var mongoose = require('mongoose');
var configDB = require('./server/config/database.js');

mongoose.connect(configDB.url);

var bodyParser = require('body-parser');

app.use(bodyParser.json());

var port = process.env.PORT;

app.use(express.static(path.resolve(__dirname, 'public')));

http.listen(port, function () {
    'use strict';
    console.log('Server running... port: ' + port);
});