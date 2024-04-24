// booleano seria true ou false.
let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1
console.log(!!isAtivo); /* sinal "!" seria negacao, como o isAtivo inicia sempre verdadeiro, coloquei
 ! falso ! verdadeiro 2 sinais !!*/

 console.log('Os verdadeiros');
 console.log(!!3);
 console.log(!!-1);
 console.log(!!' ');
 console.log(!!'texto');
 console.log(!![]);
 console.log(!!{});
 console.log(!!Infinity);
 console.log(!!(isAtivo = true));

 console.log('Os falsos');
 console.log(!!0);
 console.log(!!'');
 console.log(!!null);
 console.log(!!NaN);
 console.log(!!undefined);
 console.log(!!(isAtivo = false));

 console.log('pra finalizar');
 console.log(!! ('' || null || 0 || 'epa'));

 let nome = ' ';

 console.log(nome || 'Desconhecido');
 // vai retoranr desconhecido pq nao deu valor a variavel nome