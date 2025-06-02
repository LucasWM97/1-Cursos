const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;


function gruposDeCarros(nomes,posicao) {
    let separacao = nomes.slice(posicao,posicao+3)
    let juncao = separacao.join(" - ")
    console.log(juncao)    
}

gruposDeCarros(nomes,posicao)