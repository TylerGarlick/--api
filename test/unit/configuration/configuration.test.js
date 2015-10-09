'use strict';

let Configurator = require('../../../lib/configurator');

describe('Configurator', () => {

  let configuration;
  before(() => {
    configuration = new Configurator();
    expect(configuration).to.be.ok;
  });

  describe('Default testing environment', () => {

    it('should be ENV=testing', () => {
      expect(configuration.get('NODE_ENV')).to.be.eql('testing');
      expect(configuration.get('node_env')).to.not.be.ok;
    });

  });

  //describe('overloading configurator', () => {
  //
  //  it('should be able to override the NODE_ENV', () => {
  //    let configurator = new Configurator({files: ['unit/configurator/overloaded.json']});
  //    const ENV = 'Bogus';
  //    expect(configurator.get('NODE_ENV')).to.be.eql(ENV);
  //  });
  //
  //
  //});

});
