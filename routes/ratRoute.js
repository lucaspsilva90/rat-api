module.exports = ({
  getRat,
  createRat,
  updateRat,
  destroyRat,
}) => ([
  {
    path: '/rat',
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
    path: '/rat',
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
]);
