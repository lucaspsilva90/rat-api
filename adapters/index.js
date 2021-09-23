const ratWrapper = require('./rat');
const userWrapper = require('./user');

module.exports = (dependencies) => ({
  getRat: ratWrapper({
    config: dependencies.config,
  }).get,
  createRat: ratWrapper({
    config: dependencies.config,
  }).create,
  updateRat: ratWrapper({
    config: dependencies.config,
  }).update,
  destroyRat: ratWrapper({
    config: dependencies.config,
  }).destroy,
  getUser: userWrapper({
    config: dependencies.config,
  }).get,
  createUser: userWrapper({
    config: dependencies.config,
  }).create,
  updateUser: userWrapper({
    config: dependencies.config,
  }).update,
  destroyUser: userWrapper({
    config: dependencies.config,
  }).destroy,
});
