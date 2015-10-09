'use strict';

let NConf = require('nconf');
let Path = require('path');
let Consule = require('consul');


const CONSUL = Symbol('CONSUL');
const NCONF = Symbol('NCONF');

class Configuration {

  constructor(options) {
    options = options || {};

    NConf.env()
         .argv();

    NConf.defaults({
      NODE_ENV: 'development'
    });

    // ReadOnly Properties
    this[CONSUL] = new Consule(options);
    this[NCONF] = NConf;
  }

  get(key) {
    return this[NCONF].get(key);
  }
}

module.exports = Configuration;
