var Reflux = require('reflux');

module.exports = Reflux.createActions([
  "addMessage",
  "joinChannel",
  "sendMessage",
  "channelLeft",
  "leaveChannel",
  "channelJoined"
]);