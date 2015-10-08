'use strict';

let Promise = require('bluebird');

module.exports = [
  {
    path: '/v1/status',
    method: 'GET',
    handler: {
      // co.wrap creates a function that returns a promise, just like an async function
      async: Promise.coroutine(function* (request, reply) {
        let status = yield Promise.resolve({});
        reply(status);
      })
    }
  }
];
