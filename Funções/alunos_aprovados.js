alunos = [{
    nome: "João",
    nota: 6
},
{
    nome: "Bruno",
    nota: 3
},
{
    nome: "Clara",
    nota: 9
},
{
    nome: "Ana",
    nota: 7
}];

function alunoAprovado (arr, media){
    let alunosAprovados = [];
    for (i = 0; i < arr.length; i++ ){
    const {nome, nota} = alunos[i];
        if (nota >= media){
            alunosAprovados.push(nome);
        }
    }
    return alunosAprovados;
}

console.log(alunoAprovado(alunos, 6));