const userControllerWrapper = ({
  adapters,
  config,
  schemas: {
    userSchema,
  },
}) => {
  const create = async (request, reply) => {
    const { payload, headers } = request;

    userSchema.create.validate(payload);

    return adapters.create({
      payload,
      headers,
      config,
      onSuccess: (response) => reply.response(response).code(201),
      onError: (error) => reply.response(error).code(error.statusCode),
    });
  };

  const get = async () => {

  };

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
