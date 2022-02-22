const userController = require('./userController');
const ratController = require('./ratController');

module.exports = (adapters) => ({
  getRat: ratController(adapters).get,
  createRat: ratController(adapters).create,
  updateRat: ratController(adapters).update,
  destroyRat: ratController(adapters).destroy,
  getUser: userController(adapters).get,
  createUser: userController(adapters).create,
  updateUser: userController(adapters).update,
  destroyUser: userController(adapters).destroy,
});
