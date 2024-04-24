const lado0 = [1,1,1]
const lado1 = [1,2,2]
const lado2 = [1,2,3]
function tag(strings, ...values) {
    console.log(strings[0])
    console.log(values[0])
    console.log(strings[1])
    console.log(values[1])
    console.log(strings[2])
    console.log(values[2])
}
tag`Equilatero ${lado0} Isosceles ${lado1} Escaleno ${lado2}`