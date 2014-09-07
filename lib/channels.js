var Promise = require('bluebird');
var io = require('socket.io-client');
var confg = require('../config.json');
var security = require('../security.json');
var url = confg.channelsUrl + "?key=" + security.keys[0];

module.exports = new Promise(function(resolve, reject) {
  var socket = io(url);

  console.log("connecting to channels", url);

  socket.on('sow', function(sow) {
    resolve({
      sow: sow,
      channels: socket
    });
  });
});