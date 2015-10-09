'use strict';


let register = module.exports = (server, options, next) => {
  next();
};

register.attributes = {
  name: 'authentic',
  version: '1.0.0'
};
