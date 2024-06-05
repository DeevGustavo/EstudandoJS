function pigLatin(exercicioPigLatin) {
  const implementarPrefixo = exercicioPigLatin.match(/\b\w+\b|[.,!?;:]/g)
  return implementarPrefixo.map((frase) => {
      if (/^.,!?;:]$/.test(frase)) {
      }

      const procurandoVogal = frase.search(/[aeiouyAEIOUY]/)
      let prefixo = frase.substring(0, procurandoVogal)
      let sufixo = frase.substring(procurandoVogal)
      let fraseCorreta = sufixo + prefixo + "ay"
      if (procurandoVogal === 0) {
        fraseCorreta = frase + "ay"
      } else if (procurandoVogal === 0) {
        fraseCorreta = frase + "ay"
      } else {
        fraseCorreta = fraseCorreta.charAt(0).toUpperCase() + fraseCorreta.slice(1).toLowerCase()
        return fraseCorreta;
      }
    }).join(' ');
}

const arrayFrases = [
  "Stop",
  "No littering",
  "No shirts, no shoes, no service",
  "No persons under 14 admitted ",
  "Hey buddy, get away from my car!",
];
const resultadoArrayFrases = arrayFrases.map(pigLatin);
resultadoArrayFrases.forEach((resultado) => { console.log(resultado)});

// Falhou em dois requisitos:

// Se a palavra não tem consoante, o sufixo deve ser yay

// Se não tiver letra não traduzir
