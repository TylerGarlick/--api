'use strict';

let Hapi = require('hapi');

const PORT = process.env.PORT || 30000;
let server = new Hapi.Server();
server.connection({ port: PORT });

server.register([
  require('hapi-async-handler'),
  require('blipp'),
  {
    register: require('hapi-routes-status'),
    options: {
      routesToExpose: ['/v2/status']
    }
  },
  {
    register: require('hapi-router'),
    options: {
      routes: 'lib/routes/**/*.js' // uses glob to include files
    }
  },

], (err) => {

});

module.exports = server;
