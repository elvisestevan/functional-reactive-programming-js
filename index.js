var express = require('express');
var app = express();

var http = require('http').Server(app);
var path = require('path');

var port = process.env.PORT;

app.use(express.static(path.resolve(__dirname, 'public')));

http.listen(port, function () {
    'use strict';
    console.log('Server running... port: ' + port);
});