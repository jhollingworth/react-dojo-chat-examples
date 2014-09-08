/** @jsx React.DOM */

var React = require('react');
var moment = require('moment');
var ChannelsStore = require('../stores/channels');
var Link = require('react-router-component').Link

var Channel = React.createClass({
  render: function() {
    var messages = this.state.messages.map(function(message) {
      return (
        <div className="message">
          {message.text}
          <div className="from">{message.username}</div>
          <div className="timestamp">{moment(message.timestamp).fromNow()}</div>
        </div>
      );
    });

    return (
      <div className="channel">
        <h1>{this.state.name}</h1>
        <div className="messages">{messages}</div>
      </div>
    );
  },
  getInitialState: function() {
    return channel(this.props.name);
  },
  componentDidMount: function() {
    this.unsubscribe = ChannelsStore.listen(this.channelChanged);
  },
  componentWillUnmount: function() {
    this.unsubscribe();
  },
  channelChanged: function(channels) {
    this.setState(channel(this.props.name));
  }
});

function channel(name) {
  return ChannelsStore.get(name);
}

module.exports = Channel;