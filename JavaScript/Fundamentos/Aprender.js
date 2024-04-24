function Aleatorio ({min = 0, max = 100}) { 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
// let obj = {min: 50, max:100}
// console.log(Aleatorio(obj))