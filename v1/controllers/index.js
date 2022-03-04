const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const factory = require('./factory');
const config = require('../../config');
const schemas = require('../schemas');
const logger = require('../../common/utils/logger');
const mongo = require('../../common/libs/db');
const repository = require('../repository');
const { CustomError } = require('../../common/utils/customError/index');

const adapters = require('../adapters')({
  config,
  logger,
  mongo,
  repository,
  CustomError,
  bcrypt,
  jsonwebtoken,
});

module.exports = factory({
  adapters,
  schemas,
});
