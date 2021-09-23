const factory = require('./factory');
const config = require('../config');
const schemas = require('../schemas');

const adapters = require('../adapters')({
  config,
});

module.exports = factory({
  adapters,
  schemas,
});
