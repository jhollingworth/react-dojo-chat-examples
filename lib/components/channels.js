/** @jsx React.DOM */

var React = require('react');
var ChannelsStore = require('../stores/channels');
var Link = require('react-router-component').Link

function state() {
  return {
    channels: ChannelsStore.getState()
  }
}

var Channels = React.createClass({
  render: function() {
    var channels = this.state.channels.map(function(channel) {
      return (
        <li>
          <Link className="channel" href={"/channels/" + channel.name}>{channel.name}</Link>
        </li>
      );
    })

    return (
      <div>
        <h1>Channels</h1>
        <ul className="channels">
          {channels}
        </ul>
      </div>
    );
  },
  getInitialState: function() {
    return state();
  },
  componentDidMount: function() {
    this.unsubscribe = ChannelsStore.listen(this.channelsChanged);
  },
  componentWillUnmount: function() {
    this.unsubscribe();
  },
  channelsChanged: function(channels) {
    this.setState(state());
  }
});

module.exports = Channels;