const userWrapper = ({
  config,
  repository,
  mongo,
  CustomError,
  bcrypt,
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
      if (errors.error) {
        throw new CustomError({
          message: errors.error.details[0].message,
          statusCode: 400,
        });
      }
      const {
        name,
        email,
        password,
      } = payload;

      const encryptedPassword = await bcrypt.hash(password, 8);

      const userToBeCreated = {
        name,
        email,
        password: encryptedPassword,
      };
      await mongo.connect(config.db.url, config.db.name);
      const user = await repository.User.findOne({ email });
      if (user) throw new CustomError({ message: 'This e-mail is already been used.', statusCode: 400 });
      const response = await repository.User.insert(userToBeCreated);
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
    try {
      const { id } = params;

      await mongo.connect(config.db.url, config.db.name);

      const userExists = await repository.User.findOne({ _id: id });

      if (!userExists) throw new CustomError({ message: 'There is no user with this id', statusCode: 400 });

      const response = await repository.User
        .createOrUpdateWithWhere({ _id: id }, { $set: payload });
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

      const userExists = await repository.User.findOne({ _id: id });
      if (!userExists) throw new CustomError({ message: 'There is no user with this id', statusCode: 400 });

      const response = await repository.User.destroy({ _id: id });
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

module.exports = userWrapper;
