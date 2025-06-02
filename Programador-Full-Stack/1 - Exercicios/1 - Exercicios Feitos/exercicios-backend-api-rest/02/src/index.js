const express = require("express");
const app =  express();
const convidados = [
  "Carlos",
  "Amanda",
  "Fernanda",
  "Juliana",
  "Lucas",
  "Roberto",
]

app.use(express.json());


app.get("/convidados",function (req,res) {
  const {nome} = req.query;
  const nomeAchado = convidados.find(convidado => convidado == nome);

  if(nome&&nomeAchado){
    return res.status(200).json({mensagem:"Convidado Presente"});
  }
  if(nome&& !nomeAchado){
    return res.status(200).json({mensagem:"O convidado buscado não está presente na lista"})
  }

  res.status(200).json(convidados);
})

app.post("/convidados",function (req,res) {
  const {nome} = req.body;
  const filtrarNome = convidados.find(convidado => convidado == nome);
  if(filtrarNome){
   return res.json({mensagem:"O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também."})
  }

  convidados.push(nome);
  res.json({mensagem:"Convidado adicionado"});

})

app.delete("/convidados/:nome",function (req,res) {
  const nome = req.params.nome;

  const nomeProcurado = convidados.indexOf(nome);

  if(nomeProcurado == -1){
 return res.status(404).json({
  "mensagem": "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido."
});
  }
  
  const removerConvidado = convidados.splice(nomeProcurado,1);

  res.json({
    "mensagem": "Convidado removido."
})
  
})


app.listen(3000);