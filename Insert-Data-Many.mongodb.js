const database = 'alunos-database';
const collection = 'alunos-collection';
use(database);

db['alunos-collection'].insertMany(
    [
        {
            'cod_aluno':'2',
            'cod_turma':'1',
            'nome':'Júlio Mário de Souza',
            'cpf':'536.8953.8467-89',
            'rg':'53.623.8694-90',
            'telefone_aluno':'(11) 94362-7892',
            'telefone_responsavel':'(11) 94627-8457',
            'email':'juliao@gmail.com',
            'data_nascimento':'11/03/2003'
        },
        {
            'cod_aluno':'3',
            'cod_turma':'1',
            'nome':'Carlos Martins Cabral',
            'cpf':'653.823.146-98',
            'rg':'12.674.983-9',
            'telefone_aluno':'(11) 91464-8476',
            'telefone_responsavel':'(11) 92486-8573',
            'email':'carlinhos@gmail.com',
            'data_nascimento':'22/01/2003'
        },
        {
            'cod_aluno':'4',
            'cod_turma':'1',
            'nome':'Ana Carolina da Silva',
            'cpf':'854.856.576-80',
            'rg':'65.896.473-7',
            'telefone_aluno':'(11) 92474-7217',
            'telefone_responsavel':'(11) 98526-9362',
            'email':'carolAnna@gmail.com',
            'data_nascimento':'30/03/2003'
        },
        {
            'cod_aluno':'1',
            'cod_turma':'5',
            'nome':'Rosa Cecília das Flores',
            'cpf':'476.853.783-84',
            'rg':'25.953.736-8',
            'telefone_aluno':'(11) 91574-7254',
            'telefone_responsavel':'(11) 91765-7456',
            'email':'campo.floral01@gmail.com',
            'data_nascimento':'17/09/2003'
        },
        {
            'cod_aluno':'6',
            'cod_turma':'2',
            'nome':'Matheus Soares Fonseca',
            'cpf':'625.846.725-90',
            'rg':'12.647.906-0',
            'telefone_aluno':'(11) 91357-8346',
            'telefone_responsavel':'(11) 96254-7315',
            'email':'fontesTeteu@gmail.com',
            'data_nascimento':'06/08/2005'
        },
        {
            'cod_aluno':'7',
            'cod_turma':'2',
            'nome':'Abraão de Jesus',
            'cpf':'142.748.953-82',
            'rg':'43.975.635-7',
            'telefone_aluno':'(11) 91357-9365',
            'telefone_responsavel':'(11) 96358-8214',
            'email':'paoevinho@gmail.com',
            'data_nascimento':'21/04/2005'
        },
        {
            'cod_aluno':'8',
            'cod_turma':'2',
            'nome':'Thiago Santos Casa Grande',
            'cpf':'312.653.924-56',
            'rg':'24.873.746-8',
            'telefone_aluno':'(11) 91145-5735',
            'telefone_responsavel':'(11) 96435-8746',
            'email':'thiaguinho@gmail.com',
            'data_nascimento':'27/02/2005'
        },
        {
            'cod_aluno':'9',
            'cod_turma':'2',
            'nome':'Gilberto Guimarães',
            'cpf':'254.642.722-90',
            'rg':'62.342.614-4',
            'telefone_aluno':'(11) 94525-8353',
            'telefone_responsavel':'(11) 97425-8456',
            'email':'guimaportugal@gmail.com',
            'data_nascimento':'01/01/2005'
        }
    ]
)