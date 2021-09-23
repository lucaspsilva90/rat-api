const ratControllerWrapper = ({
  adapters,
  config,
  schemas: {
    ratSchema,
  },
}) => {
  const create = async (request, reply) => {
    const { payload, headers } = request;

    ratSchema.create.validate(payload);

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

  const ratController = {
    create,
    get,
    update,
    destroy,
  };

  return ratController;
};

module.exports = ratControllerWrapper;
