const connect = require('./Connect');

const getAll = async () => {
  const todos = await connect()
    .then((db) => db.collection('infor').find().toArray())
    .catch((err) => console.log(err));
  return todos;
};

const addOne = async (nome, idade, turma) => {
  const add = await connect()
    .then((db) => db.collection('infor').insertOne({ nome, idade, turma }))
    .catch((err) => console.log(err));
  return add;
}

module.exports = {
  getAll,
  addOne,
};