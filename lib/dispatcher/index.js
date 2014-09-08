var Dispatcher = require('./dispatcher');
var PayloadSources = require('../constants').PayloadSources;
var copyProperties = require('react/lib/copyProperties');

var Dispatcher = copyProperties(new Dispatcher(), {

  handleServerAction: function(action) {
    var payload = {
      source: PayloadSources.SERVER_ACTION,
      action: action
    };
    this.dispatch(payload);
  },

  handleViewAction: function(action) {
    var payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };
    this.dispatch(payload);
  }

});

module.exports = Dispatcher;
