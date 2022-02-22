require('dotenv').config();

module.exports = {
  server: {
    port: process.env.SERVER_PORT,
  },
  db: {
    user: process.env.DATABASE_USER,
    name: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    url: process.env.DATABASE_URL,
    collections: {
      user: process.env.USER_COLLECTION,
      rat: process.env.RAT_COLLECTION,
    },
  },
};
