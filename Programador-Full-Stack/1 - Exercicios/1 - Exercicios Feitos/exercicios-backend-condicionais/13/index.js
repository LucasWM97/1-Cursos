//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento == "credito")
{ let valorFinal = valorDoProduto - (valorDoProduto*0.05);
    let desconto = valorFinal * 0.01;
    console.log("Valor a ser pago: R$ ", desconto.toFixed(2));
}
else if (tipoDePagamento == "cheque")
{ let valorFinal = valorDoProduto - (valorDoProduto*0.03);
    let desconto = valorFinal * 0.01;
    console.log("Valor a ser pago: R$ ", desconto.toFixed(2));
}
else if (tipoDePagamento == "debito"||tipoDePagamento == "dinheiro")
{ let valorFinal = valorDoProduto - (valorDoProduto*0.1);
    let desconto = valorFinal * 0.01;
    console.log("Valor a ser pago: R$ ", desconto.toFixed(2));
}