function Contabilidade(CapitalInicial,TaxaDeJuros,TempoDeAplicacao){
    const JurosSimples = CapitalInicial * (1 + TaxaDeJuros * TempoDeAplicacao) 
    return JurosSimples
}
function Contabilidade2 (CapitalInicial1,TaxaDeJuros1,TempoDeAplicacao1){
    const JurosComposto = CapitalInicial1 * Math.pow(1 + TaxaDeJuros1, TempoDeAplicacao1)
    return JurosComposto
}
console.log(Contabilidade(1000,0.05,3))
console.log(Contabilidade2(1000,0.05,3))

function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(1000, 0.05, 3));
console.log(jurosCompostos(1000,0.05,3));