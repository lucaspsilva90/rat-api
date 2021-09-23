module.exports = ({ getUser }) => [
  {
    path: '/user',
    method: 'GET',
    config: {
      description: 'Description text here',
      notes: 'Describe your notes here',
      tags: ['api'],
      handler: getUser,
      validate: {
        options: {
          allowUnknown: true,
        },
      },
    },
  },
];
