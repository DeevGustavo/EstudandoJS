//colecao dinamica de pares chaves/valor
// const produto = new Object
// produto.nome = 'Cadeira'
// produto['marca do produto'] = 'Generica'
// produto.preco = 220


// console.log(produto)
// delete produto.preco
// delete produto['marda do produto']
// console.log(produto)


const carro = {
    modelo: 'a4',
    valor: 89000,
    prorietario: {
        nome: 'Gustavo',
        idade: 23,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores:[{
        nome: 'Erick',
        idade: 30
    }, {
        nome: 'Esther',
        idade: 24
    }],
    calcularValorSeguro: function() {
        //...
    }
}
carro.prorietario.endereco.numero = 1000
carro['prorietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)


delete carro.condutores
delete carro.prorietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)