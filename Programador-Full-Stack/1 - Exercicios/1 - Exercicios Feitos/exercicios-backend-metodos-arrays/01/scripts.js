const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

//Letra 
//revertendo
// let frutrasAoContrario = frutas.reverse();
// let frutasString = frutrasAoContrario.join(", ");
// console.log(frutasString);

//Letra B
let cortePrimeiro = frutas.splice(0,1)
let corteUltimo = frutas.splice(frutas.length-1,1,"Melão")
console.log(frutas)