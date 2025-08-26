const nomes = [
    {nome: 'Victhor', idade: 26, cel: '83991748678', matriculado: true},
    {nome: 'Matheus', idade: 26, cel: '83991748678', matriculado: true},
    {nome: 'Junior', idade: 26, cel: '83991748678', matriculado: false}
]

// let aula = {
//     data: '26/08/2025',
//     professor: 'Matheus'
// } 

// console.log(nomes[2].nome)
// console.log(aula.professor)

const { nome: nomeCompleto, idade, cel, matriculado } = nomes[1]

console.log(nomeCompleto, idade, cel)
