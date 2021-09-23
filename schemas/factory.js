const ratSchema = require('./ratSchema');
const userSchema = require('./userSchema');

module.exports = (dependencies) => ({
  ratSchema: ratSchema(dependencies),
  userSchema: userSchema(dependencies),
});
