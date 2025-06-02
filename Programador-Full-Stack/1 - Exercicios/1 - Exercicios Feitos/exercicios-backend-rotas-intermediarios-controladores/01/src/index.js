const express = require("express");
const app = express();


app.get("/somar",function (req,res) {
  const {num1,num2} = req.query
 let soma = Number(num1) + Number (num2);
 
  res.send(`${soma}`)
})

app.get("/subtrair",function (req,res) {
  const {num1,num2} = req.query
 let subtrair = Number(num1) - Number (num2);
 
  res.send(`${subtrair}`)
})

app.get("/multiplicar",function (req,res) {
  const {num1,num2} = req.query
 let multiplicar = Number(num1) * Number (num2);
 
  res.send(`${multiplicar}`)
})

app.get("/dividir",function (req,res) {
  const {num1,num2} = req.query
 let dividir = Number(num1) / Number (num2);
 
  res.send(`${dividir}`)
})


app.listen(3000);