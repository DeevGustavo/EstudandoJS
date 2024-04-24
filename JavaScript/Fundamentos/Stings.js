const escola = "cod3r"
console.log(escola.charAt(4)); // Retorna letra r, porque comceca do 0,1,2...
console.log(escola.charCodeAt(3));// numero 3 fica posicao 51 na tabela unicode.
console.log(escola.indexOf(3));

console.log(escola.substring(1));// vai do indice 1 atee o final
console.log(escola.substring(0, 3));// va do indice 0 ate o 3 

        // Escola literal// escola string
console.log('Escola '.concat(escola).concat("!"));
console.log(escola.replace(3, 'e'));// substituir o 3 pelo e

console.log('ana,Maria,Pedro'.split(','));