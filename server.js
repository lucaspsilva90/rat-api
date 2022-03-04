const hapi = require('@hapi/hapi');
const Jwt = require('@hapi/jwt');
const config = require('./config');
const routes = require('./v1/routes');

const { port } = config.server;

module.exports = (async () => {
  const server = hapi.server({ port });
  await server.register(Jwt);
  server.auth.strategy('jwt', 'jwt', {
    keys: config.jwt.key,
    verify: {
      aud: 'urn:audience:test',
      iss: 'urn:issuer:test',
      sub: false,
      nbf: true,
      exp: true,
      maxAgeSec: 14400, // 4 hours
      timeSkewSec: 15,
    },
    validate: (artifacts) => ({
      isValid: true,
      credentials: { user: artifacts.decoded.payload.user },
    }),
  });
  server.auth.default('jwt');
  server.route(routes);
  return server;
})();
