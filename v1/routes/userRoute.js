module.exports = ({
  getUser,
  createUser,
  updateUser,
  destroyUser,
}) => [
  {
    path: '/v1/users',
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
  {
    path: '/v1/users',
    method: 'POST',
    config: {
      description: 'Description text here',
      notes: 'Describe your notes here',
      tags: ['api'],
      handler: createUser,
      validate: {
        options: {
          allowUnknown: true,
        },
      },
    },
  },
  {
    path: '/v1/users/{id}',
    method: 'PUT',
    config: {
      description: 'Description text here',
      notes: 'Describe your notes here',
      tags: ['api'],
      handler: updateUser,
      validate: {
        options: {
          allowUnknown: true,
        },
      },
    },
  },
  {
    path: '/v1/users/{id}',
    method: 'DELETE',
    config: {
      description: 'Description text here',
      notes: 'Describe your notes here',
      tags: ['api'],
      handler: destroyUser,
      validate: {
        options: {
          allowUnknown: true,
        },
      },
    },
  },
];
