const express = require('express');
const rescue = require('express-rescue');

const AlunosService = require('../Service/AlunosService');

const router = express.Router();

router.get('/', rescue(async(_req, res, next) => {
  const getAll = await AlunosService.allStudents();

  const { message, code, err } = getAll;

  if (err) return next(err);

  return res.status(code).json(message);
}));

router.post('/cadastrar', rescue(async(req, res, next) => {
  const { nome, idade, turma } = req.body;

  const getAll = await AlunosService.addAluno(nome, idade, turma);

  const { message, code, err } = getAll;

  if (err) return next(err);

  return res.status(code).json(message);
}));

router.use((err, _req, res, _next) => {
  const { message, code } = err;
  res.status(code).json(message);
});

module.exports = router;
