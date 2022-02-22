const server = require('./server');
const logger = require('./libs/logger');

const init = async () => {
  const serverInstance = await server;
  await serverInstance.start();
  logger.info('Server is running!');
};

init();
