var fs = require('fs');
var _ = require('lodash');
var path = require('path');
var morgan = require('morgan');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser());
app.use(express.static(path.join(__dirname)));

app.get('/channels/:name', function(req, res) {
  res.sendFile(__dirname + '/index.html');
})

module.exports = app;