/** @jsx React.DOM */

var React = require('react');
var ChannelsStore = require('../stores/channels');
var Link = require('react-router-component').Link

function channelsState() {
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
    return channelsState();
  },
  componentDidMount: function() {
    ChannelsStore.addChangeListener(this.channelsChanged);
  },
  componentWillUnmount: function() {
    ChannelsStore.removeChangeListener(this.channelsChanged);
  },
  channelsChanged: function() {
    this.setState(channelsState());
  }
});

module.exports = Channels;