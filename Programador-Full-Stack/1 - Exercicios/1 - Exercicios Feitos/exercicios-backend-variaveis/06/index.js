let distanciaPercorrida = prompt("Distancia percorrida em metros: ")
let tempo = prompt("Tempo em segundos: ");

let metrosPorSegundos = distanciaPercorrida/tempo;
let kmPorHora = metrosPorSegundos *3.6;

console.log(`A velocidade é de ${kmPorHora} km/h`);