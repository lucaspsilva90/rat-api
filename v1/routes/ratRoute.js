module.exports = ({
  getRat,
  createRat,
  updateRat,
  destroyRat,
}) => ([
  {
    path: '/v1/rats',
    method: 'GET',
    config: {
      description: 'Description text here',
      notes: 'Describe your notes here',
      tags: ['api'],
      handler: getRat,
      validate: {
        options: {
          allowUnknown: true,
        },
      },
    },
  },
  {
    path: '/v1/rats',
    method: 'POST',
    config: {
      description: 'Description text here',
      notes: 'Describe your notes here',
      tags: ['api'],
      handler: createRat,
      validate: {
        options: {
          allowUnknown: true,
        },
      },
    },
  },
  {
    path: '/v1/rats/{id}',
    method: 'PUT',
    config: {
      description: 'Description text here',
      notes: 'Describe your notes here',
      tags: ['api'],
      handler: updateRat,
      validate: {
        options: {
          allowUnknown: true,
        },
      },
    },
  },
  {
    path: '/v1/rats/{id}',
    method: 'DELETE',
    config: {
      description: 'Description text here',
      notes: 'Describe your notes here',
      tags: ['api'],
      handler: destroyRat,
      validate: {
        options: {
          allowUnknown: true,
        },
      },
    },
  },
]);
