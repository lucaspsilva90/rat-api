module.exports = ({
  authenticateUser,
}) => ([
  {
    path: '/v1/authenticate',
    method: 'POST',
    config: {
      description: 'Description text here',
      notes: 'Describe your notes here',
      tags: ['api'],
      handler: authenticateUser,
      validate: {
        options: {
          allowUnknown: true,
        },
      },
    },
  },
]);
