const userControllerWrapper = ({
  adapters,
  config,
  schemas: {
    userSchema,
  },
  logger,
}) => {
  const create = async (request, reply) => {
    const { payload } = request;

    const errors = userSchema.create.validate(payload);

    return adapters.createUser({
      payload,
      errors,
      config,
      onSuccess: (response) => reply.response(response),
      onError: (error) => reply.response(error).code(error.statusCode),
    });
  };

  const get = async (request, reply) => adapters.getUser({
    config,
    onSuccess: (response) => reply.response(response).code(200),
    onError: (error) => {
      logger.error(error);
      return reply.response(error).code(error);
    },
  });

  const update = async () => {

  };

  const destroy = async () => {

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
