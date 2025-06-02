let totalQtd = 0;
let totalPreco=0;
let total = 0;
let menor = 999999999999999999;
let desconto1;
let desconto2;

const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        for (this.produto of this.produtos){
            totalQtd += this.produto.qtd
            totalPreco+= this.produto.precoUnit
            total += (this.produto.qtd * this.produto.precoUnit)*0.01;
        }       
        console.log(`Cliente: ${this.nomeDoCliente}
        Total de itens: ${totalQtd} itens
        Total a pagar: R$ ${total.toFixed(2)}`)
    },
     addProduto: function(carrinho,produto) {
        carrinho.produtos.push(produto)   
    },
    imprimirDetalhes:  function () {
        console.log(`Cliente: ${this.nomeDoCliente}`)
        for (this.produto of this.produtos){
            totalQtd += this.produto.qtd
            totalPreco+= this.produto.precoUnit
            total += (this.produto.qtd * this.produto.precoUnit)*0.01;
        
            console.log(`Item ${this.produto.id} - ${this.produto.nome}  - ${this.produto.qtd} und -${this.produto.precoUnit.toFixed(2)}`);
        }       
       console.log(`Total de itens: ${totalQtd}
        Total a pagar: R$ ${total.toFixed(2)}`);
},
calcularDesconto:function () {
    for (this.produto of this.produtos){
        totalQtd += this.produto.qtd
        totalPreco+= this.produto.precoUnit
        total += (this.produto.qtd * this.produto.precoUnit)*0.01;
        if (this.produto.precoUnit< menor)
        menor = this.produto.precoUnit*0.01;
    }
    
    if(totalQtd>4){
        desconto1 = menor;
    }; 
    if (total >100){
        desconto2 = total*.1;
    }


    if (desconto1>desconto2){
        return desconto2;
    }else {
        return desconto1;
    }

}


};

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
carrinho.addProduto(carrinho,novaBermuda);
carrinho.imprimirResumo()

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}
 
carrinho.addProduto(carrinho, novoTenis);
carrinho.imprimirResumo();





// carrinho.imprimirDetalhes();




// function imprimirResumoDoCarrinho(carrinho) {
//     for (carrinho.produto of carrinho.produtos){
//         totalQtd += carrinho.produto.qtd
//         totalPreco+= carrinho.produto.precoUnit
//         total += (carrinho.produto.qtd * carrinho.produto.precoUnit)*0.01;
//     }
    
//     console.log(`Cliente: ${carrinho.nomeDoCliente}
//     Total de itens: ${totalQtd} itens
//     Total a pagar: R$ ${total.toFixed(2)}`)
// }
// imprimirResumoDoCarrinho(carrinho);
