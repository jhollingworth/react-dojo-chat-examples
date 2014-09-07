/** @jsx React.DOM */

var React = require('react');

var NotFound = React.createClass({
  render: function() {
    return (
      <div className="not-found">
        <h1>Not Found</h1>
      </div>
    );
  }
});

module.exports = NotFound;