function Tradutor(Palavras) {
    const frases = Palavras.match(/\b\w+\b|[.,!?;:]/g);

    return frases.map((frase) => {
        if (/^[.,!?;:]$/.test(frase)) {
          return frase;
        }
        const procurandoVogal = frase.search(/[aeiouyAEIOUY]/)
        let Prefixo, sufixo, resultado
        if (procurandoVogal === -1) {
          resultado = frase + "ay";
        } else if (procurandoVogal === 0) {
          resultado = frase + "ay";
        } else {

          Prefixo = Palavras.substring(0, procurandoVogal);
          sufixo = Palavras.substring(procurandoVogal);
          resultado = sufixo + Prefixo + "ay";

        }
        if (/^[A-Z]/.test(frase)) {
          resultado = resultado.charAt(0).toUpperCase() + resultado.slice(1).toLowerCase();
        }

        return resultado;
      }).join(" ");
  }

  const palavra = ["Stop","No littering","no shirts, no shoes, no service","No persons under 14 admitted", "ey buddy, get away from my car!"]; // output: Ellohay, orldway! Owhay areyay ouyay, Iyay?
  const Resultado = palavra.map(Tradutor)
  Resultado.forEach((bla) => {console.log(bla)})
