function pigLatinEnhanced(sentence) {
    // Separa a sentença em palavras mantendo a pontuação
    const words = sentence.match(/\b\w+\b|[.,!?;:]/g);

    return words.map(word => {
        // Verifica se a palavra é apenas pontuação
        if (/^[.,!?;:]$/.test(word)) {
            return word;
        }

        // Encontra a primeira vogal, considerando 'y' como vogal
        const firstVowelIndex = word.search(/[aeiouyAEIOUY]/);
        let prefix, stem, result;

        if (firstVowelIndex === -1) {
            // Se não tem vogais
            result = word + "ay";
        } else if (firstVowelIndex === 0) {
            // Se começa com uma vogal
            result = word + "yay";
        } else {
            // Tem consoantes e começa com uma
            prefix = word.substring(0, firstVowelIndex);
            stem = word.substring(firstVowelIndex);
            result = stem + prefix + "ay";
        }

        // Preserva a capitalização
        if (/^[A-Z]/.test(word)) {
            result = result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
        }

        return result;
    }).join(" ");
}

// Exemplo de uso
const palavra = ["Stop","No littering","no shirts, no shoes, no service","No persons under 14 admitted", "ey buddy, get away from my car!"]; // output: Ellohay, orldway! Owhay areyay ouyay, Iyay?
const Resultado = palavra.map(pigLatinEnhanced)
Resultado.forEach((Resultados) => {console.log(Resultado)})