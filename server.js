const hapi = require('@hapi/hapi');
const config = require('./config');
const routes = require('./routes');

const { port } = config.server;

module.exports = (async () => {
  const server = hapi.server({ port });
  server.route(routes);
  return server;
})();
