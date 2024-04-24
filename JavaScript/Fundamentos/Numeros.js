const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); // saber se o numero e inteiro ou nao.
console.log(Number.isInteger(peso2));


const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));// mostrar quantas casas decimais antes do . 
console.log(typeof media); // saber se e string, funcao ou number
console.log(typeof total); // saber se e string, funcao ou number
