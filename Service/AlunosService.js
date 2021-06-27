const AlunosModel = require('../Model/AlunosModel');

const getAllIsValit = (all) => {
  if(!all) return { message: 'Não tem alunos', code: 400 };
}

const inforIsValit = (nome, idade, turma) => {
  if (!nome || nome === '') return { message: 'Campo de nome obrigatório', code: 400 };
  if (!idade) return { message: 'Campo idade obrigatório', code: 400 };
  if (typeof idade !== 'number') return { message: 'A idade deve ser um número', code: 400 };
  if (!turma|| turma === '') return { message: 'Campo de turma obrigatório', code: 400 };
};

const addAluno = async (nome, idade, turma) => {
  const inforIsValid = inforIsValit(nome, idade, turma);

  if (inforIsValid) return { err: inforIsValid };

  const alunoNew = {
    nome,
    idade,
    turma
  };
  
  await AlunosModel.addOne(nome, idade, turma);

  return { message: alunoNew, code: 201 };
}

const allStudents = async () => {
  const getAll = await AlunosModel.getAll();
  const getAllIsValid = getAllIsValit(getAll);

  if(getAllIsValid) return { err: getAllIsValid }
  const alteraId = getAll.map((data) => {
    return {
        id: data._id,
        student: data.nome,
        age: data.idade,
        classroom: data.turma,
    }
  })

  return { message: alteraId, code: 200 };
}

module.exports = {
  allStudents,
  addAluno,
};
