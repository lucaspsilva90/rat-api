const factory = require('./factory');

const { ratController, userController } = require('../controllers');

const dependencies = {
  userController,
  ratController,
};

module.exports = factory(dependencies);
