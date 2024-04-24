//Armazenadno uma funcao em uma variavel

const impimirSoma = function (a, b){
    console.log(a + b)
};

impimirSoma(2, 3);

//Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
};

console.log(soma(2, 3));

//retorno implicito

const subtracao = (a, b) => a - b //array function de somente 1 linha
console.log(subtracao(2, 3));

const imprimir2 = (a) => console.log(a); // array function passando direto para console.log
imprimir2('Legal!!!');