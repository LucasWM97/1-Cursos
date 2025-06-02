const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let requisicao = 0;
const express = require("express");

const app = express();



app.get("/", function (req, res) {
  if (requisicao < jogadores.length) {
    res.send(`É a vez de ${jogadores[requisicao]}`)
    requisicao += 1;
    return
  }

  requisicao = 0;
  res.send(`É a vez de ${jogadores[requisicao]}`)

});


app.listen(3000)
