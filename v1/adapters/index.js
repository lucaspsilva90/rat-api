const authenticateWrapper = require('./authentication');
const ratWrapper = require('./crud/rat');
const userWrapper = require('./crud/user');

module.exports = (dependencies) => ({
  // CRUD
  getRat: ratWrapper({
    config: dependencies.config,
    mongo: dependencies.mongo,
    repository: dependencies.repository,
    CustomError: dependencies.CustomError,
    bcrypt: dependencies.bcrypt,
    jsonwebtoken: dependencies.jsonwebtoken,
  }).get,
  createRat: ratWrapper({
    config: dependencies.config,
    mongo: dependencies.mongo,
    repository: dependencies.repository,
    CustomError: dependencies.CustomError,
    bcrypt: dependencies.bcrypt,
    jsonwebtoken: dependencies.jsonwebtoken,
  }).create,
  updateRat: ratWrapper({
    config: dependencies.config,
    mongo: dependencies.mongo,
    repository: dependencies.repository,
    CustomError: dependencies.CustomError,
    bcrypt: dependencies.bcrypt,
    jsonwebtoken: dependencies.jsonwebtoken,
  }).update,
  destroyRat: ratWrapper({
    config: dependencies.config,
    mongo: dependencies.mongo,
    repository: dependencies.repository,
    CustomError: dependencies.CustomError,
    bcrypt: dependencies.bcrypt,
    jsonwebtoken: dependencies.jsonwebtoken,
  }).destroy,
  getUser: userWrapper({
    config: dependencies.config,
    mongo: dependencies.mongo,
    repository: dependencies.repository,
    CustomError: dependencies.CustomError,
    bcrypt: dependencies.bcrypt,
    jsonwebtoken: dependencies.jsonwebtoken,
  }).get,
  createUser: userWrapper({
    config: dependencies.config,
    mongo: dependencies.mongo,
    repository: dependencies.repository,
    CustomError: dependencies.CustomError,
    bcrypt: dependencies.bcrypt,
    jsonwebtoken: dependencies.jsonwebtoken,
  }).create,
  updateUser: userWrapper({
    config: dependencies.config,
    mongo: dependencies.mongo,
    repository: dependencies.repository,
    CustomError: dependencies.CustomError,
    bcrypt: dependencies.bcrypt,
    jsonwebtoken: dependencies.jsonwebtoken,
  }).update,
  destroyUser: userWrapper({
    config: dependencies.config,
    mongo: dependencies.mongo,
    repository: dependencies.repository,
    CustomError: dependencies.CustomError,
    bcrypt: dependencies.bcrypt,
    jsonwebtoken: dependencies.jsonwebtoken,
  }).destroy,

  // AUTHENTICATION
  authenticateUser: authenticateWrapper({
    config: dependencies.config,
    mongo: dependencies.mongo,
    repository: dependencies.repository,
    CustomError: dependencies.CustomError,
    bcrypt: dependencies.bcrypt,
    jsonwebtoken: dependencies.jsonwebtoken,
  }).authenticate,
});
