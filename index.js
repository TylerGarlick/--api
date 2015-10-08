'use strict';

let server = require('./lib');


server.start(() => {
  console.log(`Server running at: ${server.info.uri}`);
});
