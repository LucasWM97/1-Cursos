// const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]
// numeros.sort(function (a,b) {
//     return a-b//Ordem Crescente
// })
// console.log(numeros)

// const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]
// numeros.sort(function (a,b) {
//     return b-a//Ordem decrescente
// })
// console.log(numeros);

// const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]
// numeros.sort()//crescente com Unicode
// console.log(numeros)

// const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]
// frutas.sort(function (a,b) {
//     return a.localeCompare(b)//Ordem Alfabetica
// })
// console.log(frutas);

// const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]
// frutas.sort(function (a,b) {
//     return b.localeCompare(a)//Ordem decrescente
// })
// console.log(frutas);

 const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]
 frutas.sort(function (a,b) {
    return a.length - b.length//Ordem crescente de Caracteres
})
console.log(frutas);