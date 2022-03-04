const userRoute = require('./userRoute');
const ratRoute = require('./ratRoute');
const authenticateRoute = require('./authenticationRoute');

// eslint-disable-next-line max-len
module.exports = (dependencies) => [
  userRoute(dependencies),
  ratRoute(dependencies),
  authenticateRoute(dependencies),
].flatMap((routes) => routes);
