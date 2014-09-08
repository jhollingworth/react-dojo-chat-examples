var Dispatcher = require('../dispatcher');
var ActionTypes = require('../constants').ActionTypes;

module.exports = {

  addMessage: function(message, channel) {
    Dispatcher.handleServerAction({
      type: ActionTypes.ADD_MESSAGE,
      message: message, 
      channel: channel
    });
  }, 

  joinChannel: function(username, channel) {
    Dispatcher.handleServerAction({
      type: ActionTypes.JOIN_CHANNEL,
      username: username, 
      channel: channel
    });
  }, 

  leaveChannel: function(username, channel) {
    Dispatcher.handleServerAction({
      type: ActionTypes.LEAVE_CHANNEL,
      username: username, 
      channel: channel
    });
  }
};
