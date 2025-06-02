const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]
const maiorReduzido = numeros.reduce(function (acumulador,valorAtual,indice,array) {
    let maior = acumulador;
    if (valorAtual > maior){
        maior = valorAtual;
    }  
    return maior;
})
console.log(maiorReduzido);