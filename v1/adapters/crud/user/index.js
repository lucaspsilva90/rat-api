const userWrapper = ({
  config,
  repository,
  mongo,
}) => {
  const get = async ({
    onSuccess,
    onError,
  }) => {
    try {
      await mongo.connect(config.db.url, config.db.name);
      const response = await repository.User.findMany();
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
      if (errors.error) throw Error(errors.error.details[0].message);
      const {
        name,
        email,
        password,
      } = payload;

      const user = {
        name,
        email,
        password,
      };
      await mongo.connect(config.db.url, config.db.name);
      const response = await repository.User.insert(user);
      return onSuccess(response);
    } catch (error) {
      return onError(error);
    }
  };

  const update = async ({
    payload,
    params,
    onSuccess,
    onError,
  }) => {

  };

  const destroy = async ({
    payload,
    params,
    onSuccess,
    onError,
  }) => {

  };

  return {
    get,
    create,
    update,
    destroy,
  };
};

module.exports = userWrapper;
