require('dotenv').config();

module.exports = {
  server: {
    port: process.env.SERVER_PORT,
  },
  db: {
    user: process.env.DATABASE_USER,
    password: process.env.DATBASE_PASSWORD,
    url: process.env.DATABASE_URL,
  },
};
