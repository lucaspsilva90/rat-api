module.exports = ({
  getRat,
  createRat,
  updateRat,
  destroyRat,
}) => ([
  {
    path: '/v1/rats',
    method: 'GET',
    handler: getRat,
    options: {
      auth: {
        strategy: 'jwt',
        mode: 'required',
      },
    },
  },
  {
    path: '/v1/rats',
    method: 'POST',
    handler: createRat,
    options: {
      auth: {
        strategy: 'jwt',
        mode: 'required',
      },
    },
  },
  {
    path: '/v1/rats/{id}',
    method: 'PUT',
    handler: updateRat,
    options: {
      auth: {
        strategy: 'jwt',
        mode: 'required',
      },
    },
  },
  {
    path: '/v1/rats/{id}',
    method: 'DELETE',
    handler: destroyRat,
    options: {
      auth: {
        strategy: 'jwt',
        mode: 'required',
      },
    },
  },
]);
