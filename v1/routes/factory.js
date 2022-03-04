const userRoute = require('./userRoute');
const ratRoute = require('./ratRoute');
const authenticateRoute = require('./authenticationRoute');
const profileRoute = require('./profileRoute');

// eslint-disable-next-line max-len
module.exports = (dependencies) => [
  userRoute(dependencies),
  ratRoute(dependencies),
  authenticateRoute(dependencies),
  profileRoute(dependencies),
].flatMap((routes) => routes);
