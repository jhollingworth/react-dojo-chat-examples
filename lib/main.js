/** @jsx React.DOM */

var React = require('react');
var sync = require('./sync');
var Application = require('./application');
var channels = require('./stores/channels');

require('./channels').then(function (e) {
  channels.load(e.sow);
  sync(e.channels);
  React.renderComponent(<Application channels={e.channels} />, document.getElementById("app"));
});
