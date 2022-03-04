module.exports = ({ joi }) => ({
  create: joi.object({
    name: joi.string().required(),
    birthday: joi.date().required(),
    gender: joi.string().required(),
    weight: joi.number().positive(),
    color: joi.string(),
    pattern: joi.string(),
  }),
  update: joi.object({
    name: joi.string().optional(),
    birthday: joi.date().optional(),
    weight: joi.number().positive().optional(),
    color: joi.string().optional(),
    pattern: joi.string().optional(),
    gender: joi.string().optional(),
    owner: joi.object().optional({
      name: joi.string().optional(),
      email: joi.string().email().optional(),
    }),
  }),
});
