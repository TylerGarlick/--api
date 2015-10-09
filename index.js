'use strict';

let server = require('./api');

server.start(() => {
  console.log(`Server running at: ${server.info.uri}`);
});
