/** @jsx React.DOM */

var React = require("react");
var Router = require('react-router-component')

var NotFound = Router.NotFound;
var Location = Router.Location;
var Locations = Router.Locations;

var ChannelPage = require('./components/channel');
var ChannelsPage = require('./components/channels');
var NotFoundPage = require('./components/notFound');


var Application = React.createClass({
  render: function() {
    return (
      <Locations>
        <Location path="/" handler={ChannelsPage} />
        <Location path="/channels/:name" handler={ChannelPage} />
        <NotFound handler={NotFoundPage} />
      </Locations>
    );
  }
});

module.exports = Application;