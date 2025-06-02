let capital = prompt("Qual o valor do Capital?");
let juros = prompt("Qual a taxa de juros?");
let tempo = prompt("Qual o tempo do calculo?");

let montante = parseFloat(capital) * ((1 + parseFloat(juros)) ** parseFloat(tempo));

console.log(`O montade desse investimento é de ${Math.round(montante)}`);