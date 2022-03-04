module.exports = ({
  authenticateUser,
}) => ([
  {
    path: '/v1/authenticate',
    method: 'POST',
    handler: authenticateUser,
    options: {
      auth: false,
    },
  },
]);
