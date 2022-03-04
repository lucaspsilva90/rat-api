module.exports = ({
  getUserProfileByEmail,
}) => ([
  {
    path: '/v1/profile',
    method: 'GET',
    handler: getUserProfileByEmail,
    options: {
      auth: {
        strategy: 'jwt',
        mode: 'required',
      },
    },
  },
]);
