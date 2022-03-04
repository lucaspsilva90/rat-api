const { errorHandler } = require('../../../common/utils/responseHandler');

const profileControllerWrapper = ({
  config,
  adapters,
}) => {
  const getUserProfileByEmail = (request, reply) => {
    const { headers } = request;

    return adapters.getUserProfileByEmail({
      config,
      headers,
      onSuccess: (response) => reply.response(response),
      onError: (error) => reply.response(errorHandler(error)).code(error.statusCode),
    });
  };

  return {
    getUserProfileByEmail,
  };
};

module.exports = profileControllerWrapper;
