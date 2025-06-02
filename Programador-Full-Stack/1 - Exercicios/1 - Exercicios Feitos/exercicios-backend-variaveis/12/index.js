let montante = prompt ("Digite o valor do montante: ");
let capitalInicial = prompt ("Digite o Capital Inicial: ");
let numeroDeMeses = prompt ("Digite o numero de meses: ");

let taxaDeJuros = Math.pow((parseFloat(montante)/parseFloat(capitalInicial)),(1/parseFloat(numeroDeMeses))) - 1;
let ajuste = taxaDeJuros*100

console.log(`O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${ajuste.toFixed(3)}%, pois apos ${numeroDeMeses} meses voce teve que pagar ${montante} reais`);