var _ = require('lodash');
var actions = require('./actions');

function sync(channels) {
  actions.sendMessage.listen(function(message, channel) {
    channels.emit('message', message, channel);
  });

  actions.joinChannel.listen(function(username, channel) {
    channels.emit('channel:joined', username, channel);
  });

  actions.leaveChannel.listen(function(username, channel) {
    channels.emit('channel:left', username, channel);
  });

  channels.on('channel:joined', function(e) {
    actions.channelJoined(e.username, e.channel);
  });

  channels.on('channel:left', function(e) {
    actions.channelLeft(e.username, e.channel);
  });

  channels.on('message', function(e) {
    actions.addMessage(e.message, e.channel);
  });
}

module.exports = sync;