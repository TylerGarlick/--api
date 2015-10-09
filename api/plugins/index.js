'use strict';

let Configurator = require('./configurator');

module.exports.register = (server) => {
  server.register([
    require('hapi-async-handler'),
    require('blipp'),
    {
      register: require('good'),
      options: {
        opsInterval: 5000,
        reporters: [
          {
            reporter: require('good-console'),
            events: { log: '*', response: '*', ops: '*' }
          }
        ]
      }
    },
    {
      register: require('hapi-router'),
      options: {
        routes: 'api/routes/**/*.js' // uses glob to include files
      }
    }
  ], (err) => {
    if (err) throw err;
  });
};
