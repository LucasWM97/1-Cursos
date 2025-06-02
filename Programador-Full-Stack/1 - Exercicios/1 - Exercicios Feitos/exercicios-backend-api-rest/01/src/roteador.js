const express = require("express");
const rotas = express();
const {obterAlunos,obterAluno,criarAluno,deletarAlunos} = require ("./controladores/controlador")


rotas.get("/alunos",obterAlunos);
rotas.get("/alunos/:id",obterAluno);
rotas.post("/alunos",criarAluno)
rotas.delete("/alunos/:id",deletarAlunos)


module.exports = rotas;