//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 100;
const convercao = valorDoProduto * 0.01;


let totalPorMes = convercao /quantidadeDoParcelamento;
let mesesPago = valorPago / totalPorMes;
let mesesFaltaPagar = quantidadeDoParcelamento - mesesPago;


console.log(`Restam ${mesesFaltaPagar} parcelas de R$${totalPorMes}`);
