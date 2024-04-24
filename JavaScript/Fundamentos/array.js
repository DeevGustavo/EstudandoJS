const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4];
console.log(valores);
console.log(valores.length); //saber quantos elementos tem no array

valores.push({id: 3}, false, null, 'teste');// push adiciona mais elementos no array
console.log(valores);

console.log(valores.pop());//mostra o ultimo valor do array
delete valores[0];// deleta o valor na posicao 0 do array
console.log(valores);

console.log(typeof valores);