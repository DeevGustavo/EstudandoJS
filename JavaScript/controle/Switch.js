const ImprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
            case 9:
                console.log('Quadro de Honra')
                break
        case 8:
            case 7:
                console.log('Aprovado')
                break
        case 6:
            case 5:
                case 4:
                    console.log('Recuperacao')
                    break
        case 3:
            case 2:
                case 1:
                    console.log('Reprovado')
                    break
        default: 
            console.log('Nota Invalida')

    }
};

ImprimirResultado(10);
ImprimirResultado(8.9);
ImprimirResultado(6.55);
ImprimirResultado(2.3);
ImprimirResultado(-1);
ImprimirResultado(11);