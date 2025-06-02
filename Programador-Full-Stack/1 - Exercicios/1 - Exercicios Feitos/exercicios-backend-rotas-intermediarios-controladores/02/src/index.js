const express = require("express");
const app = express();
let jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let chamando = 0;


function qualJogador() {
const texto =`É a vez de ${jogadores[chamando]} jogar!`
chamando = (chamando+1) %jogadores.length;
return texto
}

app.get("/",function (req,res) {
res.send(qualJogador());
})

app.get("/remover",function (req,res) {
  const {indice} = req.query;
  if(indice >jogadores.length-1){
    return res.send(`Não existe jogador no indice (${indice}) para ser removido`)
  }
   jogadores.splice(indice,1);
  return res.send(`${jogadores}`);
})

app.get("/adicionar",function (req,res) {
const{nome,indice} = req.query;
if(!nome){
  return res.send("Digite um nome!")
}
if(indice>jogadores.length){
  return res.send(`O indice informado (${indice}) não existe no array. Novo jogador não adicionado.`)
}
if(!indice){
  jogadores.push(nome);
  return res.send(`${jogadores}`)
}

jogadores.splice(indice,0,nome);
return res.send(`${jogadores}`)
})

app.listen(8000);