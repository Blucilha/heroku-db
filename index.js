const express = require('express');
const bodyParser = require('body-parser');

const AlunoController = require('./Controller/AlunosController');

const app = express();

app.use(bodyParser.json());

app.use('/alunos', AlunoController);

app.listen(3000, () => console.log('Connectado na porta 3000'));
