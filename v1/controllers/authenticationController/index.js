const { errorHandler } = require('../../../common/utils/responseHandler');

const authenticateWrapper = ({
  adapters,
  config,
  schemas: {
    authenticateSchema,
  },
}) => {
  const authenticate = (request, reply) => {
    const { payload } = request;

    const errors = authenticateSchema.login.validate(payload);

    return adapters.authenticateUser({
      payload,
      config,
      errors,
      request,
      onSuccess: (response) => reply.response(response),
      onError: (error) => reply.response(errorHandler(error)).code(error.statusCode),
    });
  };

  return {
    authenticate,
  };
};

module.exports = authenticateWrapper;
