'use strict';

let Configuration = require('../../../lib/configuration');

describe('Configuration', () => {

  let configuration;
  before(() => {
    configuration = new Configuration();
    expect(configuration).to.be.ok;
  });

  describe('Default testing environment', () => {

    it('should be ENV=testing', () => {
      expect(configuration.get('NODE_ENV')).to.be.eql('testing');
      expect(configuration.get('node_env')).to.not.be.ok;
    });

  });

  //describe('overloading configuration', () => {
  //
  //  it('should be able to override the NODE_ENV', () => {
  //    let configuration = new Configuration({files: ['unit/configuration/overloaded.json']});
  //    const ENV = 'Bogus';
  //    expect(configuration.get('NODE_ENV')).to.be.eql(ENV);
  //  });
  //
  //
  //});

});
