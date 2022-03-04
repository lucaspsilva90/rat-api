const { errorHandler } = require('../../../common/utils/responseHandler');

const userControllerWrapper = ({
  adapters,
  config,
  schemas: {
    userSchema,
  },
}) => {
  const create = async (request, reply) => {
    const { payload } = request;

    const errors = userSchema.create.validate(payload);

    return adapters.createUser({
      payload,
      errors,
      config,
      onSuccess: (response) => reply.response(response),
      onError: (error) => reply.response(errorHandler(error)).code(error.statusCode),
    });
  };

  const get = async (request, reply) => adapters.getUser({
    config,
    onSuccess: (response) => reply.response(response).code(200),
    onError: (error) => reply.response(errorHandler(error)).code(error.statusCode),
  });

  const update = async (request, reply) => {
    const { payload, params } = request;

    return adapters.updateUser({
      config,
      payload,
      params,
      onSuccess: (response) => reply.response(response).code(200),
      onError: (error) => reply.response(errorHandler(error)).code(error.statusCode),
    });
  };
  const destroy = async (request, reply) => {
    const { params } = request;

    return adapters.destroyUser({
      config,
      params,
      onSuccess: (response) => reply.response(response).code(200),
      onError: (error) => reply.response(errorHandler(error)).code(error.statusCode),
    });
  };

  const userController = {
    create,
    get,
    update,
    destroy,
  };

  return userController;
};

module.exports = userControllerWrapper;
