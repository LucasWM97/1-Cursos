const palavras = ["livro", "caneta", "sol", "carro", "orelha"]

function palavraValida(array) {
    const testandoPalavras = array.some(function (palavra) {
        return palavra.length >5;//testando para ver se tem palavras com mais de 5 caracteres
    })    
const resposta = testandoPalavras ? "existe palavra inválida":"array validado"
console.log(resposta);
}

palavraValida(palavras)



