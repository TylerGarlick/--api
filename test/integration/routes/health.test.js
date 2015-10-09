'use strict';

let Server = require('../../../api');
let Shot = require('shot');

describe('/v1/status', () => {

  it('should pass', (done) => {

    Shot.inject((req, res) => {
      var reply = 'Hello World';
      res.writeHead(200, { 'Content-Type': 'text/plain', 'Content-Length': reply.length });
      res.end(reply);
    }, { method: 'get', url: '/' }, (res) => {
      expect(res.payload).to.be.eql('Hello World');
      done();
    });

    // Either way works
    // Look @ server.inject(); at http://hapijs.com/api
    //Server.inject('/', function (res) {
    //  console.log(res.result);
    //  done();
    //});
  });

  it('should return the results of /v1/status', (done) => {
    Server.inject('/v1/status', (res) => {
      console.log(res.payload);
      done();
    });
  });
});
