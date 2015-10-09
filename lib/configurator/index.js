'use strict';

let NConf = require('nconf');
let Path = require('path');
let Consule = require('consul');


const CONSUL = Symbol('CONSUL');
const NCONF = Symbol('NCONF');

class Configuration {

  /**
   * Sets up a configuration
   * @param options
   */
  constructor(options) {
    options = options || {};

    NConf.env()
         .argv();

    NConf.defaults({
      NODE_ENV: 'development',
      PORT: 30000
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
