const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"]
const bebidasProibidas = ["cerveja","vodka"];


function testandoLista(array) {
    const temBebida = array.some(function (itens) {
        return itens == bebidasProibidas[0]||itens ==bebidasProibidas[1]
    })
    if (temBebida){
        console.log("revise sua lista, joão. possui bebida com venda proibida!")
    }else{
        console.log("tudo certo, vamos as compras!")
    }

}

testandoLista(palavras)