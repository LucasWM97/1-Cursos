let numeroDeLados = prompt("Quantidade de numero de lados");

let somaDosAngulosInternos = (parseFloat(numeroDeLados) - 2) * 180;
let valorDeCadaAngulo = somaDosAngulosInternos / numeroDeLados;

console.log(`A soma dos Angulos Internos e de ${somaDosAngulosInternos}`);
console.log(`O valor de cada angulo e de ${valorDeCadaAngulo} `);