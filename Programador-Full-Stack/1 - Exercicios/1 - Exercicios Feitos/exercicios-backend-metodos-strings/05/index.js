const numeroCartao = '1111222233334444';
//Cortando a primeira parte 
let cartaoCensurado1 = numeroCartao.slice(0,4)
//Cortando a parte Final
let cartaoCensurado2 = numeroCartao.slice(-4)
//Cortando a parte central
let cartaoCensurado3 = numeroCartao.slice(4,12);
let censura = "";
//Transformando a parte centraol em uma String e colocando ela em um Array ao mesmo tempo
let cartaoCensurado4 = String(cartaoCensurado3.split())
//Substituindo os digitos centrais pelo valor censurado
for (digito of cartaoCensurado4){
    censura = censura + "*";
}

let cartaoCensurado  = cartaoCensurado1 + censura  +cartaoCensurado2
console.log(cartaoCensurado)
