const express = require("express");
const app = express();
const produtos = require("./bancodedados/produtos");
const {getStateFromZipcode} = require("utils-playground")




app.get("/produtos",function (req,res) {
  return res.json(produtos);
})

app.get("/produtos/:id",function (req,res) {
  const {id} = req.params;
  const achado = produtos.filter((produto)=> produto.id == id);
  return res.json(achado);
})


app.get("/produtos/:id/frete/:cep",async function (req,res) {
  const {id,cep} = req.params;
  const cidade = await getStateFromZipcode(cep);
  const itemProcurado = produtos.filter((produto)=> produto.id == id);
  let calculoDeFrete = 0;

  if(cidade == "SP"||cidade == "RJ"){
       calculoDeFrete = 0.15;
  }else if(cidade == "BA"||cidade =="SE"||cidade == "AL"||cidade=="PE"||cidade == "PB"){
     calculoDeFrete = 0.10;
  }else if(cidade){
     calculoDeFrete = 0.12;
  }
  
  const frete = {
    "estado":cidade,
    "frete": calculoDeFrete*Number(itemProcurado[0].valor),
  }
const produto = itemProcurado[0];

  const completo = [{
    produto,
    frete
  }]
  res.json(completo);

})






app.listen(3000);