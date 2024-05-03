const database = 'alunos-database';
use(database);

//LISTA GERAL
db['alunos-collection'].find();

//LISTA COM CRITÉRIO
db['alunos-collection'].find({'cpf':'476.853.783-84'},{'cod_aluno':0});