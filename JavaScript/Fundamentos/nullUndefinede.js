let valor //nao inicializada
console.log(valor);

valor = null;// ausencia de valor
console.log(valor);
//console.log(valor.toString()); // erro!

const produto = {}
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // evite atribuir undfined, utilizar 0 ou null
console.log(!!produto.preco);// transformando em boolean
delete produto.preco;
console.log(produto);

produto.preco = null  //sem preco
console.log(!!produto.preco); //transformando em boolean
console.log(produto);