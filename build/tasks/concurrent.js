module.exports = function(grunt) {
  grunt.config("concurrent", {
    options: {
      logConcurrentOutput: true
    },
    watch: ["browserify:watch", "nodemon:dev"]
  });
};