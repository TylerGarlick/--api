'use strict';

let Hapi = require('hapi');
let Plugins = require('./plugins');
let Configurator = require('../lib/configurator');

let configuration = new Configurator();
const port = configuration.get('PORT');

let server = new Hapi.Server();
server.connection({ port });

Plugins.register(server);

module.exports = server;
