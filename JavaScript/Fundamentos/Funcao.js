//funcao sem retornos

function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(2, 10, 4, 5, 6, 7, 8); //ira imprimir somente os 2 primeiros.
imprimirSoma("Gustavo", "Oliveira")

// funcao com retorno

function soma(a, b = 0){
    return a + b 
};
console.log(soma(2, 3));
console.log(soma (2));
console.log(soma());// NaN porque nao dei valor nenhum a variavel a.
