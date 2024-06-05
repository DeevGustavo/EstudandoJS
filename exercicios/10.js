function classificaAluno(nota) {
    const notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`);
    }
}

function arredondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)
/*Operador logico %*/
// let colores = ["rojo", "verde", "azul"];
// let i = 8;

// let color = colores[i % colores.length];  // colores[8 % 3] => colores[2] => "azul"
// console.log(color);
