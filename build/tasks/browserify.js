var _ = require("lodash");

module.exports = function(grunt) {
  var DEFAULT_OPTIONS = {
    src: ["lib/main.js"],
    dest: "dist/main.js",
    options: {
      debug: true,
      transform: ["reactify", "node-lessify", "brfs"]
    }
  };

  grunt.config("browserify", {
    dev: options(),
    watch: options({
      options: {
        debug: true,
        watch: true,
        keepAlive: true
      }
    }),
    release: options({
      options: {
        debug: false
      }
    })
  });

  function options(locals) {
    return _.merge(locals || {}, DEFAULT_OPTIONS);
  }
};