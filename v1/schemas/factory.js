const ratSchema = require('./ratSchema');
const userSchema = require('./userSchema');
const authenticateSchema = require('./authenticateSchema');

module.exports = (dependencies) => ({
  ratSchema: ratSchema(dependencies),
  userSchema: userSchema(dependencies),
  authenticateSchema: authenticateSchema(dependencies),
});
