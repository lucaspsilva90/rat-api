module.exports = ({ joi }) => ({
  create: joi.object({
    name: joi.string().required(),
    birthday: joi.date().required(),
    weight: joi.number().positive(),
    color: joi.string(),
    pattern: joi.string(),
  }),
});
