module.exports = ({ joi }) => ({
  login: joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  }),
});
