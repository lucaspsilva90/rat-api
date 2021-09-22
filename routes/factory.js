const userRoute = require('./userRoute');
const ratRoute = require('./ratRoute');

module.exports = (dependencies) => [userRoute(dependencies), ratRoute(dependencies)];
