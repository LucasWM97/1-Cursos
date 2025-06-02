const nome = 'Guido Cerqueira';
let nomeSemEspaco = nome.replace(" ","");
let nomeMinusculo = nomeSemEspaco.toLowerCase();
let nomeCortado = "";

if(nomeMinusculo.length>13){
    nomeCortado = `@${nomeMinusculo.slice(0,12)}`; 
}else{ nomeCortado= `@${nomeMinusculo}`;}

console.log(nomeCortado)