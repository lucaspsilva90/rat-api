module.exports = ({ ratController }) => {
  const get = {
    path: '/rat',
    method: 'GET',
    config: {
      description: 'Description text here',
      notes: 'Describe your notes here',
      tags: ['api'],
      handler: ratController.get,
      validate: {
        options: {
          allowUnknown: true,
        },
      },
    },
  };
  return {
    ...get,
  };
};
