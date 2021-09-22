const { MongoClient } = require('mongodb');
const config = require('../config');

const uri = `mongodb+srv://${config.db.user}:${config.db.password}@${config.db.url}/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect();

module.exports = client;
