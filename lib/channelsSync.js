var _ = require('lodash');
var ServerActions = require('./actions/serverActions');

module.exports = {
  start: function(channels) {
    channels.on('channel:joined', function(e) {
      ServerActions.joinChannel(e.username, e.channel);
    });

    channels.on('channel:left', function(e) {
      ServerActions.leaveChannel(e.username, e.channel);
    });

    channels.on('message', function(e) {
      ServerActions.addMessage(e.message, e.channel);
    });
  }
};