const { errorHandler } = require('../../../common/utils/responseHandler');

const authenticateWrapper = ({
  adapters,
  config,
}) => {
  const authenticate = (request, reply) => {
    const { payload } = request;

    return adapters.authenticateUser({
      payload,
      config,
      onSuccess: (response) => reply.response(response),
      onError: (error) => reply.response(errorHandler(error)).code(error.statusCode),
    });
  };

  return {
    authenticate,
  };
};

module.exports = authenticateWrapper;
