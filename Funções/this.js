function calcularIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
} 

const george = {
    nome: "George",
    idade: 30
}

const nayanne = {
    nome: "Nayanne",
    idade: 28
}

const sophia = {
    nome: "Sophia",
    idade: 4
}

console.log(calcularIdade.call(george, 20));
console.log(calcularIdade.apply(nayanne, [20, 21]));