const { MongoClient } = require('mongodb');

const PORTA_DB = 'mongodb://127.0.0.1:27017'
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db = null;

const Connect = () => {
  return db
    ? Promise.resolve(db)
    : MongoClient.connect(PORTA_DB, OPTIONS)
      .then((conn) => {
        db = conn.db('alunos');
        return db;
      })
}

module.exports = Connect;
