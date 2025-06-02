const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const reduzido = cidades.reduce(function (acumulador,valorAtual,indice,array) {
    let maior = acumulador;
    if (valorAtual.length > maior.length){
        maior = valorAtual;
    }
  return maior;
})

console.log(reduzido)