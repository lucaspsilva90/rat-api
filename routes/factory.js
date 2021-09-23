const userRoute = require('./userRoute');
const ratRoute = require('./ratRoute');

// eslint-disable-next-line max-len
module.exports = (dependencies) => [userRoute(dependencies), ratRoute(dependencies)].flatMap((routes) => routes);
