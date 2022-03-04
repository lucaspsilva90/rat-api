module.exports = ({
  getUser,
  createUser,
  updateUser,
  destroyUser,
}) => [
  {
    path: '/v1/users',
    method: 'GET',
    options: {
      auth: {
        strategy: 'jwt',
        mode: 'required',
      },
    },
    handler: getUser,
  },
  {
    path: '/v1/users',
    method: 'POST',
    handler: createUser,
    options: {
      auth: false,
    },
  },
  {
    path: '/v1/users/{id}',
    method: 'PUT',
    handler: updateUser,
    options: {
      auth: {
        strategy: 'jwt',
        mode: 'required',
      },
    },
  },
  {
    path: '/v1/users/{id}',
    method: 'DELETE',
    handler: destroyUser,
    options: {
      auth: {
        strategy: 'jwt',
        mode: 'required',
      },
    },
  },
];
