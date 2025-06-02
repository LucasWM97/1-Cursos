let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
//Colocar 0 no Identificador
let identificadorPadronizado = identificador.padStart(6,"0");
console.log(identificadorPadronizado)

//Começar o nome em Maiusculo
let arrayDeNomes =  nome.split(" ");
let nomeFormatado = " ";
for (nome of arrayDeNomes){
    let primeiraLetra = nome.slice(0,1)
    let restanteDoNome = nome.slice(1)
    nomeFormatado += primeiraLetra.toLocaleUpperCase() + restanteDoNome + " ";
}
console.log(nomeFormatado.trim())

//Email não pode ter espaço em Branco
let emailFormatado = email.trim()
console.log(emailFormatado)