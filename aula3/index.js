const nome = 'Victhor'
const sobrenome = 'Procópio'
const idade = 26
const peso = 96
const altura = 1.87

let anoAtual;
anoAtual = 2025

const nascimento = anoAtual - idade

let imc;
imc = peso / (altura * altura)

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg, tem', altura, 'e seu IMC é de', imc, 'e ele nasceu em:', nascimento)
console.log(`Eu me chamo ${nome}`)