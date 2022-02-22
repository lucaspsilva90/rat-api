const factory = require('./factory');
const config = require('../../config');
const schemas = require('../schemas');
const logger = require('../../libs/logger');
const mongo = require('../../libs/db');
const repository = require('../repository');

const adapters = require('../adapters')({
  config,
  logger,
  mongo,
  repository,
});

module.exports = factory({
  adapters,
  schemas,
});
