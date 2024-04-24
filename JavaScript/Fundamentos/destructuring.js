// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
};

const {nome, idade} = pessoa
console.log(nome,idade);

const {nome: n, idade: i} = pessoa
console.log(n, i);
// muda a variavel de nome para n e de idade para i

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada);
//ira retornar undefined por nao ter passado o valora para o sobrenome, true para bemhumorada

const {endereco: {logradouro, numero, cep = 4123454}} = pessoa
console.log(logradouro, numero, cep)
//dei o valor ao cep fora do bloco de codigo