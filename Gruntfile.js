module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.loadTasks('./build/tasks');

  grunt.registerTask('serve', ['concurrent:watch']);
};