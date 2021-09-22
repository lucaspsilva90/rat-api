module.exports = ({ userController }) => {
  const get = {
    path: '/user',
    method: 'GET',
    config: {
      description: 'Description text here',
      notes: 'Describe your notes here',
      tags: ['api'],
      handler: userController.get,
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
