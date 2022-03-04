const { errorHandler } = require('../../../common/utils/responseHandler');

const ratControllerWrapper = ({
  adapters,
  config,
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
      onSuccess: (response) => reply.response(response),
      onError: (error) => reply.response(errorHandler(error)).code(error.statusCode),
    });
  };

  const get = async (request, reply) => adapters.getRat({
    config,
    onSuccess: (response) => reply.response(response),
    onError: (error) => reply.response(errorHandler(error)).code(error.statusCode),
  });

  const update = async (request, reply) => {
    const { payload, params } = request;

    return adapters.updateRat({
      payload,
      params,
      onSuccess: (response) => reply.response(response),
      onError: (error) => reply.response(errorHandler(error)).code(error.statusCode),
    });
  };

  const destroy = async (request, reply) => {
    const { payload, params } = request;

    return adapters.destroyRat({
      payload,
      params,
      onSuccess: (response) => reply.response(response),
      onError: (error) => reply.response(errorHandler(error)).code(error.statusCode),
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
