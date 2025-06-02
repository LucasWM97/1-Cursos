let peso = prompt("Qual seu peso?");
let altura = prompt("Qual sua altura?");

IMC = peso / Math.pow(altura, 2);
console.log(`Seu IMC é ${IMC.toFixed(1)}`);