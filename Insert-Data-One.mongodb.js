const database = 'alunos-database';
const collection = 'alunos-collection';
use(database);

db['alunos-collection'].insertOne(
    {
        'cod_aluno':'1',
        'cod_turma':'1',
        'nome':'Mariana Fonseca Neves',
        'cpf':'284.345.837-83',
        'rg':'62.753.953-0',
        'telefone_aluno':'(11) 94627-9486',
        'telefone_responsavel':'(11) 97347-0824',
        'email':'ana_maria@gmail.com',
        'data_nascimento':'03/11/2003'
    }
)