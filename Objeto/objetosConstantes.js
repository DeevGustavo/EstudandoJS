// pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'pedro'
console.log(pessoa)
// Pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'},  tem que utilizar .nome apos chamar a variavel pessoa

Object.freeze(pessoa)
//nao consigo alterar por conta que congelei com o. freeze
//Nao deixa alterar de forma alguma 
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome


console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'Joao'})
console.log(pessoaConstante)