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
    onSuccess,
    onError,
  }) => {
    const { email, password } = payload;
    try {
      await mongo.connect(config.db.url, config.db.name);

      const user = await repository.User.findOne({ email });

      const match = await bcrypt.compare(password, user.password);

      if (!match) throw new CustomError({ message: 'E-mail or password incorrect', statusCode: 403 });

      const token = jsonwebtoken.sign({}, 'ce37c2d76f70b5aa20120e55101e1d2a', {
        // eslint-disable-next-line no-underscore-dangle
        subject: user._id,
        expiresIn: '1d',
      });

      const tokenReturn = {
        token,
        user: {
          name: user.name,
          email: user.email,
        },
      };

      return onSuccess(tokenReturn);
    } catch (error) {
      return onError(error);
    }
  };

  return {
    authenticate,
  };
};

module.exports = autenticateWrapper;
