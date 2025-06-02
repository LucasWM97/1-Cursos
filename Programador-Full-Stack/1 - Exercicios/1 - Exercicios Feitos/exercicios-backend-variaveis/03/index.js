let valorTotal = prompt("Qual o valor total?")
let seuDinheiro = prompt("Quanto dinheiro você tem disponivel?")


let porcentagemSeuDinheiro = (100 * seuDinheiro) / valorTotal;
let porcentagemDeDescontoNecessario = 100 - porcentagemSeuDinheiro.toFixed(2);
let valorDoDesconto = valorTotal - seuDinheiro;

console.log(`O valor do desconto necessario é de R$ ${valorDoDesconto} e você precisa de um cupom de ${porcentagemDeDescontoNecessario}%`);