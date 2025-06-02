let x1 = prompt("Qual o valor de X1?");
let x2 = prompt("Qual o valor de X2?");
let y1 = prompt("Qual o valor de Y1?");
let y2 = prompt("Qual o valor de Y2?");

let x = Math.pow((x2-x1),2);
let y = Math.pow((y2-y1),2);
let distanciaEntrePontos = Math.sqrt(x+y);

console.log(`A distancia entre pontos é de ${distanciaEntrePontos}`);