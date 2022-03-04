const ratWrapper = ({
  config,
  mongo,
  repository,
  CustomError,
}) => {
  const get = async ({
    onSuccess,
    onError,
  }) => {
    try {
      await mongo.connect(config.db.url, config.db.name);
      const response = await repository.Rat.findMany();
      return onSuccess(response);
    } catch (error) {
      return onError(error);
    }
  };

  const create = async ({
    payload,
    errors,
    onSuccess,
    onError,
  }) => {
    try {
      if (errors.error) {
        throw new CustomError({
          message: errors.error.details[0].message,
          statusCode: 400,
        });
      }
      const {
        name,
        birthday,
        weight,
        color,
        pattern,
      } = payload;

      const rat = {
        name,
        birthday,
        weight,
        color,
        pattern,
      };
      await mongo.connect(config.db.url, config.db.name);
      const response = await repository.Rat.insert(rat);
      return onSuccess(response);
    } catch (error) {
      return onError(error);
    }
  };

  const update = async ({
    payload,
    onSuccess,
    onError,
    params,
  }) => {
    try {
      const { id } = params;

      await mongo.connect(config.db.url, config.db.name);
      const response = await repository.Rat.createOrUpdateWithWhere({ _id: id }, { $set: payload });
      return onSuccess(response);
    } catch (error) {
      return onError(error);
    }
  };

  const destroy = async ({
    params,
    onSuccess,
    onError,
  }) => {
    try {
      const { id } = params;
      await mongo.connect(config.db.url, config.db.name);
      const response = await repository.Rat.destroy({ _id: id });
      return onSuccess(response);
    } catch (error) {
      return onError(error);
    }
  };

  return {
    get,
    create,
    update,
    destroy,
  };
};

module.exports = ratWrapper;
