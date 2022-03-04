const { genericError } = require('../../../common/utils/responseHandler');

const ratControllerWrapper = ({
  adapters,
  config,
  logger,
  schemas: {
    ratSchema,
  },
}) => {
  const create = async (request, reply) => {
    const { payload, headers } = request;

    const errors = ratSchema.create.validate(payload);

    return adapters.createRat({
      errors,
      payload,
      headers,
      config,
      onSuccess: (response) => reply.response(response).code(201),
      onError: (error) => reply(genericError(error)),
    });
  };

  const get = async (request, reply) => adapters.getRat({
    config,
    onSuccess: (response) => reply.response(response).code(200),
    onError: (error) => reply(genericError(error)),
  });

  const update = async (request, reply) => {
    const { payload, params } = request;

    return adapters.updateRat({
      payload,
      params,
      onSuccess: (response) => reply.response(response),
      onError: (error) => {
        logger.error(error);
        return reply.response(error).code(error);
      },
    });
  };

  const destroy = async (request, reply) => {
    const { payload, params } = request;

    return adapters.destroyRat({
      payload,
      params,
      onSuccess: (response) => reply.response(response),
      onError: (error) => {
        logger.error(error);
        return reply.response(error).code(error);
      },
    });
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
