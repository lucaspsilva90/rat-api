const server = require('./server');

const init = async () => {
  const serverInstance = await server;
  try {
    await serverInstance.start();
  } catch (error) {
    console.log(error);
  }
};

init();
