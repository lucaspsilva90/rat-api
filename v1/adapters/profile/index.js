const profileWrapper = ({
  config,
  repository,
  mongo,
  jsonwebtoken,
}) => {
  const getUserProfileByEmail = async ({
    headers,
    onSuccess,
    onError,
  }) => {
    try {
      const [, token] = headers.authorization.split(' ');

      const { email } = jsonwebtoken.decode(token);

      await mongo.connect(config.db.url, config.db.name);

      const response = await repository.Rat.find({ 'owner.email': email }, { projection: { owner: 0 } });

      return onSuccess(response);
    } catch (error) {
      return onError(error);
    }
  };

  return {
    getUserProfileByEmail,
  };
};

module.exports = profileWrapper;
