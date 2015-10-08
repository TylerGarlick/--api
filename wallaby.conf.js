'use strict';

module.exports = function () {
  return {
    files: [
      'lib/**/*',
      'test/**/helper.js',
      'test/**/*.json',
      { pattern: 'test/**/*.tests.js', ignore: true }
    ],
    tests: [
      'test/**/*.test.js'
    ],
    env: {
      type: 'node',
      runner: '/usr/local/bin/node',

      params: {
        // node flags
        //runner: '/usr/local/bin/node',
        // env vars
        env: 'ENV=testing'
      }
    },
    bootstrap: function () {
      require('./test/helper')
    }
  }
};
