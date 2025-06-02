const express = require("express");
const app = express();
let minutos = 0;
let segundos = 0;
let contador = null;

function iniciarContador() {
  contador = setInterval(() => {
    if (segundos < 59) {
      segundos += 1;
    } else {
      minutos += 1;
      segundos = 0;
    }
  }, 1000);
}

function pausarContador() {
  clearInterval(contador);
}

app.get("/", function (req, res) {
  res.send(`Tempo atual do cronômetro: ${minutos} minutos e ${segundos} segundos`);
});

app.get("/iniciar", function (req, res) {
  res.send("Cronômetro iniciado");
  iniciarContador();
});

app.get("/pausar", function (req, res) {
  res.send("Cronômetro pausado!");
  pausarContador();
});

app.get("/continuar", function (req, res) {
  res.send("Cronometro continuado!");
  iniciarContador();
});

app.get("/zerar", function (req, res) {
  res.send("Cronometro zerado!");
  minutos = 0;
  segundos = 0;
});

app.listen(8000);
