function Tradutor(Palavras) {
    const vogais = "aeiouy"
    let PrimeiraVogal = 0

    for(let i = 0; i < Palavras.length; i++) {
        if (vogais.includes(Palavras[i].toLocaleLowerCase())){
            PrimeiraVogal = i
            break
        }
    }
    // if (PrimeiraVogal === -1) {
    //     return Palavras + "ay"
    // }else if (PrimeiraVogal === 0) {
    //     return Palavras + "ay"
    // }else {}
    
    let Prefixo = Palavras.substring(0, PrimeiraVogal)
    let sufixo = Palavras.substring(PrimeiraVogal)
    return sufixo + Prefixo + "ay"
    
}
const Palavra = ["stop", "no", "people", "bubble", "under", "admitted", "away"]
const Resultados = Palavra.map(Tradutor)

Resultados.forEach(Resultado => {console.log(Resultado)})