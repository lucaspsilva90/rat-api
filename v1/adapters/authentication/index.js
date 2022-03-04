const autenticateWrapper = ({
  config,
  mongo,
  repository,
  CustomError,
  jsonwebtoken,
  bcrypt,
}) => {
  const authenticate = async ({
    payload,
    errors,
    onSuccess,
    onError,
  }) => {
    try {
      const { email, password } = payload;

      if (errors.error) {
        throw new CustomError({
          message: errors.error.details[0].message,
          statusCode: 400,
        });
      }

      await mongo.connect(config.db.url, config.db.name);

      const user = await repository.User.findOne({ email });

      const match = await bcrypt.compare(password, user.password);

      if (!match) throw new CustomError({ message: 'E-mail or password incorrect', statusCode: 403 });

      const token = jsonwebtoken.sign({ user: user.name, email: user.email }, config.jwt.key, {
        // eslint-disable-next-line no-underscore-dangle
        subject: user._id,
        expiresIn: '1d',
        audience: 'urn:audience:test',
        issuer: 'urn:issuer:test',
      });

      const response = {
        status: 'OK',
        token,
      };

      return onSuccess(response);
    } catch (error) {
      return onError(error);
    }
  };

  return {
    authenticate,
  };
};

module.exports = autenticateWrapper;
