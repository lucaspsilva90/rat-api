const ratWrapper = require('./crud/rat');
const userWrapper = require('./crud/user');

module.exports = (dependencies) => ({
  // CRUD
  getRat: ratWrapper({
    config: dependencies.config,
    mongo: dependencies.mongo,
    repository: dependencies.repository,
  }).get,
  createRat: ratWrapper({
    config: dependencies.config,
    mongo: dependencies.mongo,
    repository: dependencies.repository,
  }).create,
  updateRat: ratWrapper({
    config: dependencies.config,
    mongo: dependencies.mongo,
    repository: dependencies.repository,
  }).update,
  destroyRat: ratWrapper({
    config: dependencies.config,
    mongo: dependencies.mongo,
    repository: dependencies.repository,
  }).destroy,
  getUser: userWrapper({
    config: dependencies.config,
    mongo: dependencies.mongo,
    repository: dependencies.repository,
  }).get,
  createUser: userWrapper({
    config: dependencies.config,
    mongo: dependencies.mongo,
    repository: dependencies.repository,
  }).create,
  updateUser: userWrapper({
    config: dependencies.config,
    mongo: dependencies.mongo,
    repository: dependencies.repository,
  }).update,
  destroyUser: userWrapper({
    config: dependencies.config,
    mongo: dependencies.mongo,
    repository: dependencies.repository,
  }).destroy,
});
