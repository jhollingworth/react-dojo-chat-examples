var R = require('ramda');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({

  init: function() {
    this.channels = [];
    this.listenTo(Actions.addMessage, this.addMessage);
  },

  load: function(channels) {
    this.channels = channels;
    this.triggerUpdate();
  },

  output: function(message, channelName) {
    var channel = this.get(channelName);
    channel.messages.push(message);
    this.triggerUpdate();
  },

  triggerUpdate: function() {
    this.trigger(this.channels);
  },

  getState: function() {
    return this.channels;
  },

  get: function (name) {
    var channel = R.find(R.propEq('name', name))(this.channels);

    if (!channel) {
      channel = {
        name: name,
        members: [],
        messages: []
      }
      this.channels.push(channel);
    }

    return channel;
  }
});