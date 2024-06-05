/*1. Se uma palavra não tiver letras, não a traduza
2. Toda pontuação deve ser preservada. 
3. Se a palavra começa com uma letra maiúscula, então a palavra traduzida também deve. 
4. Se a palavra não contiver consoantes, 
que o prefixo seja vazio e a palavra seja o caule. 
O final da palavra deve ser "yay" em vez de meramente "ay". um. 
Por exemplo, "I" seria "Iyay"
*/


// for (let i = 0; i < Palavras.length; i++) {
    //   if (vogais.includes(Palavras[i].toLocaleLowerCase())) {
        //     PrimeiraVogal = i;
        //     break;
        //   }
        // }
function Tradutor(Palavras) {
    const frases = Palavras.match(/\b\w+\b|[.,!?;:]/g);
    const vogais = "aeiouy"
        /*.length
        Utilidade: Retorna o comprimento de uma string ou o número de elementos em um array.
        Exemplo:  let texto = "Olá, mundo!";
        console.log(texto.length); // 11*/
    for(let i = 0; i < Palavras.length; i++) {
        if (vogais.includes(Palavras[i].toLocaleLowerCase())){
            PrimeiraVogal = i
            break
        }
    }
    /*.map
      Utilidade: Cria um novo array com os resultados da chamada de uma função para cada elemento do array original.
      Exemplo:let numeros = [1, 2, 3];
      let quadrados = numeros.map(num => num * num);
      console.log(quadrados); // [1, 4, 9]*/
    return frases .map((frase) => {
        if (/^[.,!?;:]$/.test(frase)) {
          return frase;
        }
        /*.search
        Utilidade: Executa uma busca por uma expressão regular na string e retorna o índice da primeira correspondência, 
        ou -1 se não encontrar nada.
        Exemplo:let texto = "Olá, mundo!";
        console.log(texto.search("mundo")); // 5*/
        const procurandoVogal = frase.search(/[aeiouyAEIOUY]/)
        let Prefixo, sufixo, resultado
        if (procurandoVogal === -1) {
          resultado = frase + "ay";
        } else if (procurandoVogal === 0) {
          resultado = frase + "ay";
        } else {
        /*.substring
        Utilidade: Retorna uma parte da string entre os índices inicial e final.
        Exemplo:let texto = "Olá, mundo!";
        console.log(texto.substring(0, 3)); // "Olá" OBS: ele passa o ultimo indice e exclusivo "nao aparece no console"*/ 
          Prefixo = frase.substring(0, procurandoVogal);
          sufixo = frase.substring(procurandoVogal);
          resultado = sufixo + Prefixo + "ay";

        }
        if (/^[A-Z]/.test(frase)) {
          resultado = resultado.charAt(0).toUpperCase() + resultado.slice(1).toLowerCase();
        }

        return resultado;
      }).join(" ");
      /*.join
      Utilidade: Junta todos os elementos de um array em uma string, colocando uma string específica entre cada elemento.
      Exemplo:let palavras = ["Olá", "mundo", "JavaScript"];
      let mensagem = palavras.join(" ");
      console.log(mensagem); // "Olá mundo JavaScript"*/
  }

  const Palavra = ["Stop","No littering","No shirts, no shoes, no service","No persons under 14 admitted", "Hey buddy, get away from my car!"]
  const Resultados = Palavra.map(Tradutor);
  /*.forEach
Utilidade: Executa uma função especificada uma vez para cada elemento do array.
Exemplo:let cores = ["vermelho", "verde", "azul"];
cores.forEach(cor => console.log(cor));
// saída:
// vermelho
// verde
// azul 
Cada um desses métodos é essencial para manipulação e processamento de dados em JavaScript,
especialmente em aplicações web e servidores Node.js*/
  Resultados.forEach((Resultado_) => { console.log(Resultado_)})
 /* .split
    Utilidade: Divide uma string em um array de substrings com base em um delimitador especificado.
    Exemplo:let frase = "banana, maçã, laranja";
    let frutas = frase.split(", ");
   console.log(frutas); // ['banana', 'maçã', 'laranja']*/
  /*.slice
    Utilidade: Extrai uma parte de um array ou string, retornando um novo array ou string sem modificar o original.
    Exemplo:let numeros = [1, 2, 3, 4, 5];
    console.log(numeros.slice(1, 3)); // [2, 3] OBS: ele conta somente os elementos nao conta caractere tipo "," ou " "
    o primeiro indice passado "1" e inclusivo ela passa para o console.
    o segundo "3" exclusivo : nao e passado para o console*/