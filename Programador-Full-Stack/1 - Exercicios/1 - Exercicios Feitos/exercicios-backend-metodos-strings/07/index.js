const email = "aluno@cubos.academy";
//let email ="jose.messias@cubos."

//tem Arroba
let temArroba = email.includes("@");
//tem Ponto
let temPonto = email.includes(".")

//Primeiro Valor
let ValorNoComeco = email[0];
//Ultimo Valor
let ValorNoFinal  = email[email.length-1] 
//Ponto
let ponto = "."

 if (temPonto&&temArroba&&ValorNoComeco!=ponto&&ValorNoFinal!=ponto){
     console.log("E-mail Válido");
 }else{
     console.log("E-mail inválido")
 }