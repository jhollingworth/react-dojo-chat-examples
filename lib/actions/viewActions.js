var loadChannels = require('../channels');
var Dispatcher = require('../dispatcher');
var ActionTypes = require('../constants').ActionTypes;
var MessageStore = require('../stores/MessageStore');

module.exports = {

  addMessage: function(message, channel) {
    Dispatcher.handleViewAction({
      type: ActionTypes.ADD_MESSAGE,
      message: message, 
      channel: channel
    });

    emit('message', message, channel);
  }, 

  joinChannel: function(username, channel) {
    Dispatcher.handleViewAction({
      type: ActionTypes.JOIN_CHANNEL,
      username: username, 
      channel: channel
    });

    emit('channel:joined', username, channel);
  }, 

  leaveChannel: function(username, channel) {
    Dispatcher.handleViewAction({
      type: ActionTypes.LEAVE_CHANNEL,
      username: username, 
      channel: channel
    });

    emit('channel:left', username, channel);
  }
};


function emit() {
  var args = arguments;

  loadChannels.then(function(e) {
    e.channels.emit.apply(e.channels, args);
  });
}