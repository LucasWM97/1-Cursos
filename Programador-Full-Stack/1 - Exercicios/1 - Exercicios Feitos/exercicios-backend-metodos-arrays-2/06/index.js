const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

function cidadesTeste(array) {
    const filtro = array.filter(function (nomes) {
        return nomes.length <= 8
    })
    console.log(filtro);
    const juntando = filtro.join(", ")
    console.log(juntando)
}

cidadesTeste(cidades)