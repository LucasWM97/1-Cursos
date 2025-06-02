let raio = prompt("Qual o tamanho do raio?")

let comprimento = 2 * Math.PI * raio;
let area = Math.PI * Math.pow(raio, 2);

console.log(`O comprimento do circulo e de ${comprimento.toFixed(1)}`);
console.log(`A area e de ${area.toFixed(2)}`);